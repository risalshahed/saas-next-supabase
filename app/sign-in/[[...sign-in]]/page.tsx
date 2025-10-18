import { SignIn } from "@clerk/nextjs"

const Page = () => {
  return (
    <main className="flex justify-center items-center">
      <SignIn />
    </main>
  )
}

export default Page;