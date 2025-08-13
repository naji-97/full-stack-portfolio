'use client'
import React, { useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa'

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+123 456 7890'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'elbairabennaji@gmail.com'
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    description: '123 Main St, Anytown, USA'
  }
]

import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
function ContactPage() {
  const [formData, setFormData] = useState({    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      setLoading(false)
      setSuccess(response.ok)
      const data = await response.json()
      if (data.success) {
        setSuccess(true)
        setFormData({ firstname: '', lastname: '', email: '', phone: '', service: '', message: '' })
      } else {
        console.error(data.message)
      }
    } catch (error) {
      console.error('Error sending email:', error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <motion.section initial={{ opacity: 0 }
    } animate={{ opacity: 1, transition: { duration: 0.4, delay: 2.4, ease: "easeIn" } }}
      className="py-6" >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg[#27272c] rounded-xl'
            onSubmit={handleSubmit}>
              <h3 className='text-4xl text-accent'>Let&apos;s work together</h3>
              <p className='text-white/60'>
                let&apos;s create something amazing together. Fill out the form below to get in touch with me.
              </p>
              {/* Input */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6' >
                <Input type='text' value={formData.firstname}
                onChange={(e) => setFormData({ ...formData, firstname: e.target.value })} 
                 placeholder='Firstname' />
                <Input type='text' value={formData.lastname} placeholder='Lastname' onChange={(e) => setFormData({ ...formData, lastname: e.target.value })} />
                <Input type='email' placeholder='Email adress' onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <Input type='phone' placeholder='Phone number' onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
              {/* Select */}
              <Select onValueChange={(value) => setFormData({ ...formData, service: value })}
                value={formData.service} > 
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a service' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    <SelectItem value='web-development'>Web Development</SelectItem>
                    <SelectItem value='graphic-design'>Graphic Design</SelectItem>
                    <SelectItem value='seo'>SEO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* TextArea */}
              <Textarea placeholder='Your message' className='h-[200px]' value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              {/* Button */}
              <Button type="submit" size={'md'} className='max-w-40'>
                {loading ? "Sending..." : "Send message"}
              </Button>
              {success && <p className="text-green-500">Message sent!</p>}
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-4 mb-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className=''>{item.icon}</div></div>
                  <div className='flex-1'>
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </motion.section>
  )
}

export default ContactPage
