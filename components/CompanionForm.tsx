'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import z, { maxLength, minLength } from "zod";
// Build the Form
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { Textarea } from "@/components/ui/textarea"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { subjects } from "@/constants";

// 0 create form schema
const formSchema = z.object({
  name: z.string().min(1, { message: 'Companion is required' }),
  subject: z.string().min(1, { message: 'Subject is required' }),
  topic: z.string().min(1, { message: 'Topic is required' }),
  voice: z.string().min(1, { message: 'Voice is required' }),
  style: z.string().min(1, { message: 'Style is required' }),
  duration: z.number().min(1, { message: 'Duration is required' })
})

// 2 submit handler
const handleFormSubmit = (values: z.infer<typeof formSchema>) => {
  console.log(values)
}

const CompanionForm = () => {
  // 1 define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      subject: '',
      topic: '',
      voice: '',
      style: '',
      duration: 15
    }
  })
  return (
    <Card className="w-full sm:max-w-md">
      {/* <CardHeader>
        <CardTitle>Bug Report</CardTitle>
        <CardDescription>
          Help us improve by reporting bugs you encounter.
        </CardDescription>
      </CardHeader> */}
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(handleFormSubmit)}>
          <FieldGroup>
            {/* name */}
            <Controller
              name='name'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>
                    Companion name
                  </FieldLabel>
                  <Input
                    {...field}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter the companion name"
                    autoComplete="off"
                    className="input"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* subject */}
            <Controller
              name='subject'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>
                    Subject
                  </FieldLabel>
                  <Select
                    name={field.name}
                    defaultValue={field.value}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      aria-invalid={fieldState.invalid}
                      className="input capitalize"
                    >
                      <SelectValue placeholder="Select the subject" />
                    </SelectTrigger>
                    <SelectContent position="item-aligned">
                      {/* <SelectItem value="auto">Auto</SelectItem> */}
                      <SelectSeparator />
                      {subjects.map((subject) => (
                        <SelectItem key={subject} value={subject} className="capitalize">
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* topic */}
            <Controller
              name='topic'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>
                    What should the companion help with?
                  </FieldLabel>
                  <Textarea
                    {...field}
                    aria-invalid={fieldState.invalid}
                    placeholder="Ex. derivatives & integrals"
                    autoComplete="off"
                    className="input"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* voice */}
            <Controller
              name='voice'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>
                    Voice
                  </FieldLabel>
                  <Select
                    name={field.name}
                    defaultValue={field.value}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      aria-invalid={fieldState.invalid}
                      className="input"
                    >
                      <SelectValue placeholder="Select the voice" />
                    </SelectTrigger>
                    <SelectContent position="item-aligned">
                      {/* <SelectItem value="auto">Auto</SelectItem> */}
                      <SelectSeparator />
                        <SelectItem value='male'>
                          Male
                        </SelectItem>
                        <SelectItem value='female'>
                          Female
                        </SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* style */}
            <Controller
              name='style'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>
                    Style
                  </FieldLabel>
                  <Select
                    name={field.name}
                    defaultValue={field.value}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      aria-invalid={fieldState.invalid}
                      className="input"
                    >
                      <SelectValue placeholder="Select the style" />
                    </SelectTrigger>
                    <SelectContent position="item-aligned">
                      {/* <SelectItem value="auto">Auto</SelectItem> */}
                      <SelectSeparator />
                        <SelectItem value='formal'>
                          Formal
                        </SelectItem>
                        <SelectItem value='casual'>
                          Casual
                        </SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            
            {/* duration */}
            <Controller
              name='duration'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>
                    Estimated session duration in minutes
                  </FieldLabel>
                  <Input
                    {...field}
                    type="number"
                    aria-invalid={fieldState.invalid}
                    placeholder="15"
                    autoComplete="off"
                    className="input"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          {/* <Button className="cursor-pointer" type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button> */}
          {/* Start from 1 hour 39 minutes */}
          <Button className="cursor-pointer w-full" type="submit" form="form-rhf-demo">
            Build Your Companion
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}

export default CompanionForm;