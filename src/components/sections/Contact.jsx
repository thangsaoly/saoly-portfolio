import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Section } from "../ui/Section";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setSubmitError(null);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          name: data.name,
          reply_to: data.email,
          email: data.email,
          message: data.message,
          title: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("FAILED...", error);
      setSubmitError("Something went wrong, please try again later.");
    }
  };

  return (
    <Section
      id="contact"
      kicker="say hello"
      title="Let's Build Something"
      subtitle="Have a question, a project, or a role in mind? I reply fast — drop me a message below."
      className="max-w-4xl"
    >
      <div className="relative border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden">
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <CheckCircle size={56} className="text-emerald-500 mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent Successfully!</h3>
            <p className="text-neutral-400 max-w-sm mb-8">
              Thank you for reaching out. I will get back to you as soon as possible.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              Send another message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  error={errors.name}
                  {...register("name")}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1.5 pl-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  error={errors.email}
                  {...register("email")}
                  placeholder="name@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1.5 pl-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">
                Message
              </label>
              <Textarea
                id="message"
                rows={5}
                error={errors.message}
                {...register("message")}
                placeholder="What would you like to say..."
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1.5 pl-1">{errors.message.message}</p>
              )}
            </div>

            {submitError && (
              <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-xl text-sm">
                <AlertCircle size={16} />
                <p>{submitError}</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </Button>
          </form>
        )}
      </div>
    </Section>
  );
}
