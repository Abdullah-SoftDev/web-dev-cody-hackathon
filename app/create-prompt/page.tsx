"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CreatePromptValidation } from "@/lib/validations"
import { useForm } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"

export default function page() {

    const form = useForm<z.infer<typeof CreatePromptValidation>>({
        resolver: zodResolver(CreatePromptValidation),
        defaultValues: {
            tag: "",
            prompt: "",
        },
    })

    function onSubmit(values: z.infer<typeof CreatePromptValidation>) {
        // Do something with the form values.
        console.log(values)
    }

    return (
        <>
            <div className="mx-auto max-w-2xl text-center py-14">
                <h1 className="bg-gradient-to-r from-purple-500 via-pink-600 to-rose-500 bg-clip-text text-transparent text-center display text-3xl h-full md:text-4xl font-bold pb-1">
                    Create Prompt
                </h1>
                <p className="mt-3 text-lg text-gray-600 sm:text-xl max-w-2xl">
                    Create and share amazing prompts with the world, and let your
                    imagination run wild with any AI-powered platform.
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="tag"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Field of Prompt (#product, #webdevelopment, #idea, etc.)</FormLabel>
                                <FormControl>
                                    <Input className='focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0' placeholder="write the tag" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="prompt"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your AI Prompt</FormLabel>
                                <FormControl>
                                    <Textarea className='focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0' placeholder="write the prompt" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </>
    )
}