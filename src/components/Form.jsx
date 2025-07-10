import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import pot from '../assets/bgb4.png'

const Form = () => {
  const [ref, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Invalid phone number'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('https://raviyora.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message')
      }

      if (!data.success) {
        throw new Error(data.message || 'Failed to send message')
      }

      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError(error.message || 'Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  return (
    <section id="contact" className="p-4 sm:p-6 md:p-8 lg:p-10 royal-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#D4AF37_1px,transparent_1px),linear-gradient(-45deg,#D4AF37_1px,transparent_1px)] bg-[length:20px_20px] sm:bg-[length:30px_30px] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[#D4AF37]/5 to-black/0"></div>
      </div>

      {/* Decorative Pots */}
      <div className="absolute -left-8 top-1/4 w-32 h-32 opacity-10 pointer-events-none">
        <img src={pot} alt="Decorative pot" className="w-full h-full object-contain" />
      </div>
      <div className="absolute -right-8 top-1/3 w-40 h-40 opacity-10 pointer-events-none">
        <img src={pot} alt="Decorative pot" className="w-full h-full object-contain" />
      </div>
      <div className="absolute left-1/4 -bottom-8 w-36 h-36 opacity-10 pointer-events-none">
        <img src="/pots/pot3.png" alt="Decorative pot" className="w-full h-full object-contain" />
      </div>
      <div className="absolute right-1/4 -bottom-8 w-32 h-32 opacity-10 pointer-events-none">
        <img src="/pots/pot4.png" alt="Decorative pot" className="w-full h-full object-contain" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto relative"
      >
        <div className="text-center mb-12 sm:mb-14 md:mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 border-2 border-[#D4AF37]/5 rounded-full"></div>
          {/* Decorative Pot in Header */}
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-24 h-24 opacity-80 pointer-events-none">
            <img src={pot} alt="Decorative pot" className="w-full h-full object-contain" />
          </div>
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-24 h-24 opacity-80 pointer-events-none">
            <img src={pot} alt="Decorative pot" className="w-full h-full object-contain" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold ethnic-gold font-serif mb-4 sm:mb-5 md:mb-6 tracking-wide relative"
          >
            <span className="relative z-10">
              Get in Touch
              <span className="block text-[#FDB931] mt-1 sm:mt-2">Let's create something special together</span>
            </span>
            <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 w-32 sm:w-40 md:w-48 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-black/30 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 sm:p-8 md:p-10 relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#D4AF37]/20 rounded-tr-xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#D4AF37]/20 rounded-bl-xl"></div>
          
          {/* Decorative Pots in Form */}
          <div className="absolute -left-8 top-1/4 w-20 h-20 opacity-10 pointer-events-none">
            <img src="/pots/pot7.png" alt="Decorative pot" className="w-full h-full object-contain" />
          </div>
          <div className="absolute -right-8 bottom-1/4 w-20 h-20 opacity-10 pointer-events-none">
            <img src="/pots/pot8.png" alt="Decorative pot" className="w-full h-full object-contain" />
          </div>

          {submitSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#D4AF37] mb-2">Message Sent!</h3>
              <p className="text-[#FDB931]/80">Thank you for reaching out. We'll get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-500 text-center"
                >
                  {submitError}
                </motion.div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full bg-black/30 border ${errors.name ? 'border-red-500' : 'border-[#D4AF37]/20'} rounded-lg px-4 py-3 text-[#FDB931] placeholder-[#FDB931]/50 focus:outline-none focus:border-[#D4AF37]/40 transition-all duration-300 group-hover:border-[#D4AF37]/30 relative z-10`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-5 left-0 text-red-500 text-sm"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className={`w-full bg-black/30 border ${errors.email ? 'border-red-500' : 'border-[#D4AF37]/20'} rounded-lg px-4 py-3 text-[#FDB931] placeholder-[#FDB931]/50 focus:outline-none focus:border-[#D4AF37]/40 transition-all duration-300 group-hover:border-[#D4AF37]/30 relative z-10`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-5 left-0 text-red-500 text-sm"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                <div className="relative group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    className={`w-full bg-black/30 border ${errors.phone ? 'border-red-500' : 'border-[#D4AF37]/20'} rounded-lg px-4 py-3 text-[#FDB931] placeholder-[#FDB931]/50 focus:outline-none focus:border-[#D4AF37]/40 transition-all duration-300 group-hover:border-[#D4AF37]/30 relative z-10`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  {errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-5 left-0 text-red-500 text-sm"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </div>

                <div className="relative group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className={`w-full bg-black/30 border ${errors.subject ? 'border-red-500' : 'border-[#D4AF37]/20'} rounded-lg px-4 py-3 text-[#FDB931] placeholder-[#FDB931]/50 focus:outline-none focus:border-[#D4AF37]/40 transition-all duration-300 group-hover:border-[#D4AF37]/30 relative z-10`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  {errors.subject && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-5 left-0 text-red-500 text-sm"
                    >
                      {errors.subject}
                    </motion.p>
                  )}
                </div>
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  className={`w-full bg-black/30 border ${errors.message ? 'border-red-500' : 'border-[#D4AF37]/20'} rounded-lg px-4 py-3 text-[#FDB931] placeholder-[#FDB931]/50 focus:outline-none focus:border-[#D4AF37]/40 transition-all duration-300 resize-none group-hover:border-[#D4AF37]/30 relative z-10`}
                ></textarea>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-5 left-0 text-red-500 text-sm"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              <div className="text-center">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 text-[#D4AF37] px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-lg sm:text-xl font-medium border border-[#D4AF37]/50 transition-all duration-300 hover:border-[#D4AF37]/70 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[length:8px_8px] sm:bg-[length:10px_10px] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-[#D4AF37]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Form
