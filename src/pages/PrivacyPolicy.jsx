import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 text-gray-800 py-16 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-600 mb-4"> Privacy Policy</h1>
          <p className="text-lg text-gray-600"></p>
        </div>
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed">
            At DamDaily, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
            <i className="pi pi-database text-green-500"></i>
            1. Information We Collect
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Personal Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Name and email address (when you subscribe to our newsletter)</li>
                <li>Contact information (when you submit inquiries or feedback)</li>
                <li>Account credentials (if you create an account with us)</li>
                <li>Demographic information (optional survey participation)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website and search queries</li>
                <li>Cookies and tracking technologies data</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
            <i className="pi pi-cog text-green-500"></i>
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>To provide and maintain our news services</li>
            <li>To personalize your reading experience</li>
            <li>To send newsletters and news updates (with your consent)</li>
            <li>To improve our website and content quality</li>
            <li>To analyze user behavior and preferences</li>
            <li>To respond to your inquiries and feedback</li>
            <li>To detect and prevent fraud and security issues</li>
            <li>To comply with legal obligations</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
            <i className="pi pi-chart-line text-green-500"></i>
            3. Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-700 mb-4">
            We use cookies and similar tracking technologies to enhance your
            experience on our site:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">Essential Cookies</h4>
              <p className="text-sm text-gray-700">Required for basic site functionality</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2"> Analytics Cookies</h4>
              <p className="text-sm text-gray-700">Help us understand how visitors interact with our site</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">Preference Cookies</h4>
              <p className="text-sm text-gray-700">Remember your settings and preferences</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">Advertising Cookies</h4>
              <p className="text-sm text-gray-700">Deliver relevant advertisements</p>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
            <i className="pi pi-share-alt text-green-500"></i>
            4. Data Sharing and Disclosure
          </h2>
          <p className="text-gray-700 mb-4">
            We do not sell your personal information. We may share your data
            with:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Service providers and business partners (analytics, hosting, email services)</li>
            <li>Legal authorities when required by law or to protect our rights</li>
            <li>Third parties in connection with business transfers or mergers</li>
            <li>Advertising partners (in aggregated, non-personally identifiableform)</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
            <i className="pi pi-shield text-green-500"></i>
            5. Data Security
          </h2>
          <p className="text-gray-700">
            We implement appropriate technical and organizational security
            measures to protect your personal information against unauthorized
            access, alteration, disclosure, or destruction. However, no internet
            transmission is completely secure, and we cannot guarantee absolute
            security.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
            <i className="pi pi-user text-green-500"></i>
            6. Your Rights and Choices
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <i className="pi pi-eye text-green-500 mt-1"></i>
              <span className="text-gray-700">
                Right to access your personal data
              </span>
            </div>
            <div className="flex items-start gap-2">
              <i className="pi pi-pencil text-green-500 mt-1"></i>
              <span className="text-gray-700">
                Right to correct inaccurate data
              </span>
            </div>
            <div className="flex items-start gap-2">
              <i className="pi pi-trash text-green-500 mt-1"></i>
              <span className="text-gray-700">
                Right to delete your personal data
              </span>
            </div>
            <div className="flex items-start gap-2">
              <i className="pi pi-ban text-green-500 mt-1"></i>
              <span className="text-gray-700">
                Right to object to processing
              </span>
            </div>
            <div className="flex items-start gap-2">
              <i className="pi pi-download text-green-500 mt-1"></i>
              <span className="text-gray-700">Right to data portability</span>
            </div>
            <div className="flex items-start gap-2">
              <i className="pi pi-envelope text-green-500 mt-1"></i>
              <span className="text-gray-700">Right to withdraw consent</span>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
            <i className="pi pi-external-link text-green-500"></i>
            7. Third-Party Links
          </h2>
          <p className="text-gray-700">
            Our website may contain links to third-party websites. This Privacy
            Policy does not apply to those sites, and we encourage you to review
            their privacy policies before providing any personal information.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
            <i className="pi pi-child text-green-500"></i>
            8. Children's Privacy
          </h2>
          <p className="text-gray-700">
            DamDaily is not intended for children under 13 years of age. We do
            not knowingly collect personal information from children under 13.
            If you believe we have collected information from a child under 13,
            please contact us immediately.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
            <i className="pi pi-globe text-green-500"></i>
            9. International Data Transfers
          </h2>
          <p className="text-gray-700">
            Your information may be transferred to and processed in countries
            other than your own. We ensure appropriate safeguards are in place
            to protect your data in accordance with this Privacy Policy.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
            <i className="pi pi-info-circle text-green-500"></i>
            10. Changes to This Policy
          </h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new policy on this page and
            updating the "Last updated" date. We encourage you to review this
            policy periodically.
          </p>
        </div>
        <div className="bg-green-50 rounded-xl p-6 mt-12">
          <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
            Contact Us
          </h2>
          <p className="text-gray-700 text-center mb-4">
            If you have any questions about this Privacy Policy or your personal
            data, please contact us:
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-700">
            <div className="flex items-center gap-2">
              <i className="pi pi-envelope text-green-600"></i>
              <a href="mailto:privacy@damdaily.com" className="text-green-600 hover:underline font-semibold">
                privacy@damdaily.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <i className="pi pi-phone text-green-600"></i>
              <span>+234-902-024-4367</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-300">
          <p className="text-gray-600">
            Thank you for trusting DamDaily with your information.
          </p>
        </div>
      </div>
    </div>
  );
}
