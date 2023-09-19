import React from 'react'

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Promptcard = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                <Badge>Badge</Badge>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>)
}

export default Promptcard