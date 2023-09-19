import React from 'react'

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import CopyButton from './CopyButton'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { HeartIcon } from 'lucide-react'

const Promptcard = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='flex justify-between'>
                    <Badge>Badge</Badge>
                    <div className="flex space-x-4 items-center">
                        <Link href={"/"} className="flex-shrink-0 flex items-center ">
                            <img className="w-7 h-7 cursor-pointer" src="/chatgptIcon.png" />
                        </Link>
                        {/* <CopyButton prompt={prompt} /> */}
                        <CopyButton prompt={"Hello"} />
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p>Create a whimsical portrait of a person in a dreamy, natural environment. Use soft lighting and pastel colors to convey a sense of tranquility.</p>
            </CardContent>
            <CardFooter className='flex justify-between'>
                <div className='space-x-3 flex items-center'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h2>Abdullah Sidd</h2>
                </div>
                <div className="flex items-center space-x-1">
                    <HeartIcon className='w-6 h-6 cursor-pointer' />
                    <span className="font-medium">433</span>
                </div>
            </CardFooter>
        </Card>
    )
}

export default Promptcard