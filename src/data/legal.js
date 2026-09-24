import { site } from "./site";

const effectiveDate = "[Insert approved effective date]";

export const privacyPolicy = {
  title: "Privacy Policy",
  effectiveDate,
  intro:
    "This draft Privacy Policy explains how Elevated Resin Creations handles information submitted through this website. It is provided for client review and must be approved before publication.",
  sections: [
    {
      title: "Information We Collect",
      paragraphs: [
        `When you contact ${site.name} through this website, we may collect the information you provide, such as your name, phone number, email address, project details, and any optional images or files you choose to upload through the enquiry form.`
      ]
    },
    {
      title: "How We Use Information",
      paragraphs: [
        "We use submitted information to respond to your enquiry, discuss your project, provide requested information or quotes, and communicate with you about your request."
      ]
    },
    {
      title: "Form Processing",
      paragraphs: [
        "Website enquiries are collected through a GoHighLevel/LeadConnector form. Information submitted through that form is processed through the provider's systems in accordance with its applicable terms and privacy practices."
      ]
    },
    {
      title: "Optional Images and Files",
      paragraphs: [
        "If you choose to upload images or other files with your enquiry, we may use those materials to understand and respond to your project request."
      ]
    },
    {
      title: "Cookies and Third-Party Services",
      paragraphs: [
        "This website may use third-party services that place or read cookies or process technical information necessary to provide their functionality. This includes the embedded enquiry form provider. Please review the privacy information provided by third-party services for details of their practices."
      ]
    },
    {
      title: "How to Contact Us",
      paragraphs: [
        `For questions about this draft Privacy Policy or the information you submit, contact ${site.name} at ${site.email}.`
      ]
    },
    {
      title: "Changes to This Policy",
      paragraphs: [
        "Any updated Privacy Policy will be posted on this page with a revised effective date."
      ]
    }
  ]
};

export const termsAndConditions = {
  title: "Terms and Conditions",
  effectiveDate,
  intro:
    "These draft Terms and Conditions describe the general use of the Elevated Resin Creations website. They are provided for client review and must be approved before publication.",
  sections: [
    {
      title: "Informational Website Use",
      paragraphs: [
        `The content on this website is provided for general informational purposes regarding ${site.name} and its resin surfacing services.`
      ]
    },
    {
      title: "Quotes and Project Discussions",
      paragraphs: [
        "Any estimate, quote, or project discussion provided through this website is not a contractual agreement. Project scope, specifications, pricing, scheduling, and any other terms must be confirmed separately in writing."
      ]
    },
    {
      title: "Intellectual Property",
      paragraphs: [
        `Unless otherwise stated, the website content, branding, design, text, and visual materials are owned by or used with permission by ${site.name}. They may not be copied, reproduced, or used without permission.`
      ]
    },
    {
      title: "External Links",
      paragraphs: [
        "This website may include links to third-party websites for convenience. Elevated Resin Creations is not responsible for the content, availability, or privacy practices of external websites."
      ]
    },
    {
      title: "Website Availability",
      paragraphs: [
        "We may update, change, or remove website content at any time. We do not guarantee that the website or its content will always be available or free from errors."
      ]
    },
    {
      title: "Contact Us",
      paragraphs: [
        `For questions about these draft Terms and Conditions, contact ${site.name} at ${site.email}.`
      ]
    },
    {
      title: "Changes to These Terms",
      paragraphs: [
        "Any updated Terms and Conditions will be posted on this page with a revised effective date."
      ]
    }
  ]
};