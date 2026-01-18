import React from 'react'

export default function TermsandConditions() {
  return (
    <div className="min-h-screen bg-black text-gray-100 py-16 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-500 mb-4">Terms and Conditions</h1>
          <p className="text-lg text-gray-400">
            Last updated: {new Date().getFullYear()}
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 border border-green-800/30 mb-8">
          <p className="text-gray-300 leading-relaxed">
            By accessing and using <span className="text-green-400 font-semibold">DamDaily</span>, 
            you accept and agree to be bound by these Terms and Conditions. Please read them carefully.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <i className="pi pi-check-circle text-green-500"></i>
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-300 leading-relaxed">
            By accessing and using DamDaily, you accept and agree to be bound by these Terms and Conditions. 
            If you do not agree to these terms, please do not use our website.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <i className="pi pi-globe text-green-500"></i>
            2. Services Provided
          </h2>
          <p className="text-gray-300 mb-4">
            DamDaily provides news content, articles, and informational resources across various categories including but not limited to:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 text-gray-300">
            <div className="flex items-center gap-2"><i className="pi pi-circle-fill text-green-500 text-xs"></i><span>Breaking news and current events</span></div>
            <div className="flex items-center gap-2"><i className="pi pi-circle-fill text-green-500 text-xs"></i><span>Political and economic coverage</span></div>
            <div className="flex items-center gap-2"><i className="pi pi-circle-fill text-green-500 text-xs"></i><span>Technology and science updates</span></div>
            <div className="flex items-center gap-2"><i className="pi pi-circle-fill text-green-500 text-xs"></i><span>Health and wellness information</span></div>
            <div className="flex items-center gap-2"><i className="pi pi-circle-fill text-green-500 text-xs"></i><span>Cultural and entertainment news</span></div>
            <div className="flex items-center gap-2"><i className="pi pi-circle-fill text-green-500 text-xs"></i><span>Sports coverage</span></div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <i className="pi pi-user text-green-500"></i>
            3. User Responsibilities
          </h2>
          <p className="text-gray-300 mb-4">You agree to:</p>
          <div className="grid sm:grid-cols-2 gap-3 text-gray-300">
            <div className="flex items-start gap-2"><i className="pi pi-check text-green-500 mt-1"></i><span>Use the Site for lawful purposes only</span></div>
            <div className="flex items-start gap-2"><i className="pi pi-check text-green-500 mt-1"></i><span>Not engage in disruptive activities</span></div>
            <div className="flex items-start gap-2"><i className="pi pi-check text-green-500 mt-1"></i><span>Not attempt unauthorized access</span></div>
            <div className="flex items-start gap-2"><i className="pi pi-check text-green-500 mt-1"></i><span>Not use automated data extraction</span></div>
            <div className="flex items-start gap-2"><i className="pi pi-check text-green-500 mt-1"></i><span>Respect intellectual property rights</span></div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <i className="pi pi-database text-green-500"></i>
            4. Content Sources and Attribution
          </h2>
          <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold text-green-300 mb-3 flex items-center gap-2">
              <i className="pi pi-exclamation-triangle"></i>
              Important Notice Regarding Third-Party Content
            </h3>
            <p className="text-gray-300 mb-4">
              A portion of our news content is fetched from external APIs and news providers. 
              These sources maintain their own terms and conditions, privacy policies, and content usage rules.
            </p>
            <p className="text-gray-300 font-semibold">By using our service, you acknowledge that:</p>
          </div>
          <div className="grid gap-3 text-gray-300">
            <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg"><i className="pi pi-cloud text-green-500 mt-1"></i><span>Some content may be sourced from third-party providers</span></div>
            <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg"><i className="pi pi-file text-green-500 mt-1"></i><span>These providers have their own terms and conditions that govern their content</span></div>
            <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg"><i className="pi pi-share-alt text-green-500 mt-1"></i><span>DamDaily acts as an aggregator and distributor of this content</span></div>
            <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg"><i className="pi pi-tag text-green-500 mt-1"></i><span>We strive to provide proper attribution to original sources</span></div>
            <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg"><i className="pi pi-comment text-green-500 mt-1"></i><span>The accuracy and opinions expressed in third-party content belong to the original providers</span></div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
              <i className="pi pi-copyright text-green-500"></i>
              5. Intellectual Property
            </h2>
            <p className="text-gray-300 leading-relaxed">
              All content on DamDaily, including text, graphics, logos, and software, is the property 
              of DamDaily or our content providers and is protected by copyright laws. You may not 
              reproduce, distribute, or create derivative works without explicit permission.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
              <i className="pi pi-pencil text-green-500"></i>
              6. User-Generated Content
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Users may submit comments, feedback, or other content. By submitting content, you grant 
              us a non-exclusive, royalty-free license to use, modify, and display such content.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
              <i className="pi pi-shield text-green-500"></i>
              7. Disclaimer of Warranties
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The Site and all content are provided "as is" without warranties of any kind. We do not guarantee 
              accuracy, availability, or security of our services.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
              <i className="pi pi-ban text-green-500"></i>
              8. Limitation of Liability
            </h2>
            <p className="text-gray-300 leading-relaxed">
              DamDaily shall not be liable for any damages resulting from your use of the Site, 
              content errors, or unauthorized access to your data.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
              <i className="pi pi-external-link text-green-500"></i>
              9. External Links
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our Site may contain links to third-party websites. We are not responsible for the content, accuracy, or opinions expressed on these websites.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
              <i className="pi pi-code text-green-500"></i>
              10. API Usage and Data Collection
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We utilize various APIs to enhance our services. Your use of our Site constitutes agreement to our data collection practices and third-party API provider terms.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
              <i className="pi pi-times-circle text-green-500"></i>
              11. Account Termination
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to terminate or suspend access to our services without prior notice for conduct that violates these Terms or is harmful to other users.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
              <i className="pi pi-sync text-green-500"></i>
              12. Changes to Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may modify these Terms at any time. Continued use of the Site after changes constitutes acceptance of the modified Terms.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <i className="pi pi-balance-scale text-green-500"></i>
            13. Governing Law
          </h2>
          <div className="bg-gray-900 rounded-lg p-6 border border-green-800/30">
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with international standards 
              and principles that respect digital rights and cross-border internet regulations.
            </p>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Any legal matters will be addressed through international arbitration and dispute resolution mechanisms that respect the global nature of our services.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <i className="pi pi-envelope text-green-500"></i>
            14. Contact Information
          </h2>
          <div className="bg-gray-900 rounded-lg p-6 border border-green-800/30">
            <p className="text-gray-300 mb-4">For questions about these Terms, contact us at:</p>
            <div className="flex flex-col sm:flex-row gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <i className="pi pi-envelope text-green-500"></i>
                <a href="mailto:legal@damdaily.com" className="text-green-400 hover:text-green-300 transition-colors">
                  legal@damdaily.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <i className="pi pi-map-marker text-green-500"></i>
                <span>Address: Undisclosed for security purposes</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
              <i className="pi pi-wrench text-green-500"></i>
              15. Severability
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If any provision of these Terms is found to be invalid, the remaining provisions 
              will remain in full force and effect.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
              <i className="pi pi-file text-green-500"></i>
              16. Entire Agreement
            </h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms constitute the entire agreement between you and DamDaily regarding your use of the Site.
            </p>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400">Thank you for reading our Terms and Conditions carefully.</p>
        </div>
      </div>
    </div>
  )
}
