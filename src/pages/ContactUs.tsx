import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center">
          <div className="mx-auto mb-6 w-20 h-20 bg-custom-gradient rounded-full flex items-center justify-center shadow-custom-lg">
            <CheckCircle className="w-10 h-10 text-whitish" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Thank You!
          </h2>
          <p className="text-muted-foreground text-lg">
            Your message has been sent successfully. We'll get back to you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-30">
        <div className="absolute inset-0 bg-custom-gradient opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-left sm:text-center text-5xl md:text-7xl font-bold text-foreground mb-6">
              Let's build{" "}
              <span className="text-custom-gradient">Something</span>
              <span className="text-custom-gradient"> Cool!</span>
            </h1>
            <p className="text-left sm:text-center text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business? Let's start a conversation about
              how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We're here to help you succeed. Whether you have questions about
                our services, need a consultation, or want to discuss a project,
                we'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto: letstalk@vehutech.com"
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-custom">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">Email</h3>
                  <p className="text-muted-foreground">letstalk@vehutech.com</p>
                </div>
              </a>

              <a
                href="tel:_2348145256960"
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shadow-custom">
                  <Phone className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">Phone</h3>
                  <p className="text-muted-foreground">+234 (814) 525-6960</p>
                </div>
              </a>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shadow-custom">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">Location</h3>
                  <p className="text-muted-foreground">
                    Remote | Abuja
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-custom">
              <h3 className="text-card-foreground font-semibold mb-3">
                Response Time
              </h3>
              <p className="text-muted-foreground">
                I typically respond within 24 hours during business days. For
                urgent matters, please call me directly.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-custom">
              <h3 className="text-card-foreground font-semibold mb-3">
                Quick Response
              </h3>
              <p className="text-muted-foreground mb-4">
                Need immediate assistance? Get a faster response on WhatsApp -
                I'm usually online and ready to help.
              </p>
              <a
                href="https://wa.me/2348145256960?text=Hi!%20I'm%20interested%20in%20transforming%20my%20business%20and%20would%20like%20to%20discuss%20how%20your%20solutions%20can%20drive%20measurable%20results%20for%20my%20company.%20When%20can%20we%20schedule%20a%20consultation%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-custom"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-custom-lg">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    First Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-input border ${
                      errors.firstName
                        ? "border-destructive focus:ring-destructive"
                        : "border-border focus:ring-ring"
                    } rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background transition-all duration-200`}
                    placeholder="Your name..."
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-destructive">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Last Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-input border ${
                      errors.lastName
                        ? "border-destructive focus:ring-destructive"
                        : "border-border focus:ring-ring"
                    } rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background transition-all duration-200`}
                    placeholder="Your lastname..."
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-destructive">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-card-foreground mb-2"
                >
                  Email Address <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-input border ${
                    errors.email
                      ? "border-destructive focus:ring-destructive"
                      : "border-border focus:ring-ring"
                  } rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background transition-all duration-200`}
                  placeholder="email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-card-foreground mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-all duration-200"
                  placeholder="input your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-card-foreground mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-all duration-200"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-card-foreground mb-2"
                >
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-input border ${
                    errors.message
                      ? "border-destructive focus:ring-destructive"
                      : "border-border focus:ring-ring"
                  } rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background transition-all duration-200 resize-none scrollbar-custom`}
                  placeholder="Tell us about your project or how we can help you..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-custom-gradient hover:opacity-90 disabled:opacity-50 text-whitish font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-custom-lg focus-custom"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-whitish/30 border-t-whitish rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
