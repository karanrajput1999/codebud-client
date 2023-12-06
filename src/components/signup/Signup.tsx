import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  password: z.string().min(4, {
    message: "Password must be atleast 4 chars long.",
  }),
  confirmPassword: z.string().min(4, {
    message: "Password must be atleast 4 chars long.",
  }),
});

function Signup() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <main
      className="flex items-center justify-center px-5 pt-5 "
      style={{ minHeight: "calc(100vh - 4rem)" }}
    >
      <section className="w-80 sm:w-96 border border-black p-5 rounded-xl">
        <span className="text-3xl font-bold text-center block mb-5">
          Signup
        </span>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            {/* <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <Input type="text" id="name" className="mb-2" />
          </div> */}

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="John doe" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="someone@example.com" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Your password" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Confirm your password" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center mt-3">
              <Button className="bg-transparent h-8 text-primarycb border border-primarycb hover:bg-white">
                Choose Avatar
              </Button>
            </div>

            <div className="flex justify-center mt-5">
              <Button
                type="submit"
                className="bg-primarycb text-lg w-28 hover:bg-primarycb "
              >
                Signup
              </Button>
            </div>
          </form>
        </Form>
        <span className="mt-5 block text-center">
          Already registered ?{" "}
          <Link to="/login" className="underline text-primarycb">
            Login here
          </Link>{" "}
        </span>
      </section>
    </main>
  );
}

export default Signup;
