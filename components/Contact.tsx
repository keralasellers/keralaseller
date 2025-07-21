import React from 'react'
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    MapPin,
    CheckCircle,
    ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {


    const [formData, setFormData] = useState({
        name: "",
        whatsapp: "",
        businessName: "",
    })

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitted(true)

        const form = new FormData()
        form.append("name", formData.name)
        form.append("whatsapp", formData.whatsapp)
        form.append("businessName", formData.businessName)
        form.append("formGoogleSheetName", "keralasellers")
        form.append("formDataNameOrder", JSON.stringify(["name", "whatsapp", "businessName"]))
        form.append("formGoogleSendEmail", "keralasellers.in@gmail.com")

        try {
            await fetch("https://script.google.com/macros/s/AKfycbwtyLGDrdA_87UB3QQDVNTCd8FJd26aOPP4wf4rRVGVmxNJjc0NqGNzNZIo4b_MVBuP/exec", {
                method: "POST",
                mode: "no-cors",
                body: form,
            })

            // even if the response can't be read, assume success
            setFormData({
                name: "",
                whatsapp: "",
                businessName: "",
            })
            setIsSubmitted(true)
        } catch (error) {
            alert("Network error. Please try again later.")
            setIsSubmitted(false)
        }
    }



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }



    return (
        <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join the Early Access List</h2>
                <p className="text-green-100 text-lg mb-2">
                    Be among the first Kerala resellers to launch your digital store
                </p>
                <p className="text-green-200 text-sm mb-8">
                    ✨ Early access members get free setup assistance and priority support
                </p>

                <Card className="border-0 shadow-2xl">
                    <CardContent className="p-8">
                        {isSubmitted ? (
                            <div className="text-center py-8">
                                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome to the Family! 🎉</h3>
                                <p className="text-gray-600 mb-4">We'll notify you as soon as KeralaSellers.in launches</p>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <p className="text-sm text-green-700">
                                        <strong>What's next?</strong> We'll send you exclusive updates, beta access invitations, and
                                        setup guides via WhatsApp.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <form id="submit-form" onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <Input
                                        type="text"
                                        id='name'
                                        name="name"
                                        placeholder="Your Full Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="h-12"
                                    />
                                    <Input
                                        type="tel"
                                        id='whatsapp'
                                        name="whatsapp"
                                        placeholder="WhatsApp Number"
                                        value={formData.whatsapp}
                                        onChange={handleInputChange}
                                        required
                                        className="h-12"
                                    />
                                </div>
                                <Input
                                    type="text"
                                    id='businessName'
                                    name="businessName"
                                    placeholder="Your Business Name (Optional)"
                                    value={formData.businessName}
                                    onChange={handleInputChange}
                                    className="h-12"
                                />
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full bg-green-600 hover:bg-green-700 text-white h-12 text-lg font-semibold rounded-lg"
                                >
                                    Join the Early Access List
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                                <p className="text-xs text-gray-500 text-center">
                                    By joining, you agree to receive updates about KeralaSellers.in. We respect your privacy.
                                </p>
                            </form>
                        )}
                    </CardContent>
                </Card>

                {/* Social Proof */}
                <div className="mt-8 text-center">
                    {/* <p className="text-green-100 text-sm mb-4">Join 500+ Kerala businesses already waiting</p> */}
                    <div className="flex justify-center space-x-4 text-green-200">
                        <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">Trivandrum</span>
                        </div>


                    </div>
                </div>
            </div>
        </div>)
}
