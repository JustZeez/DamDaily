import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-green-900 text-gray-100 py-16 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-green-400 mb-6">About DamDaily</h1>
          <p className="text-lg leading-relaxed text-gray-300">
            In a world overflowing with noise, a clear, resonant voice is more vital than ever. 
            <span className="text-green-300 font-semibold"> DamDaily </span> 
            was founded on a simple, unwavering belief: that everyone deserves access to journalism 
            that is not only fast and factual, but also fearless and fair.
            <br /><br />
            Our vision is bold and unapologetic: to earn a place among the world's most essential news 
            sources, becoming a daily destination for those who currently turn to the global standards 
            of BBC, CNN, and Al Jazeera.
            <br /><br />
            We believe information is the bedrock of society. That's why we are committed to delivering 
            truth-driven journalism, global stories, and fresh perspectives that inspire awareness, action, 
            and change.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-green-400 flex items-center gap-3">
            <i className="pi pi-bullseye text-green-300"></i>
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed">
            To empower people across the globe with reliable, timely, and unbiased news. 
            We go beyond the headlines to cover the stories that truly matter  from politics and 
            technology to health, culture, and global affairs  connecting the dots across continents.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-green-400 flex items-center gap-3">
            <i className="pi pi-eye text-green-300"></i>
            Our Vision
          </h2>
          <p className="text-gray-300 leading-relaxed">
            To become a world-class news source, celebrated for its credibility, integrity, and impact. 
            We are building a future where the name <span className="text-green-300 font-semibold">DamDaily </span> 
            is mentioned alongside the industry's leading pillars  trusted not just to know what's happening, 
            but to understand why it matters.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-green-400 flex items-center gap-3">
            <i className="pi pi-compass text-green-300"></i>
            What Drives Us
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
            <li className="flex items-center gap-2">
              <i className="pi pi-check-circle text-green-400"></i>
              Truth over trends
            </li>
            <li className="flex items-center gap-2">
              <i className="pi pi-check-circle text-green-400"></i>
              Real stories, real people
            </li>
            <li className="flex items-center gap-2">
              <i className="pi pi-check-circle text-green-400"></i>
              Journalism with purpose
            </li>
            <li className="flex items-center gap-2">
              <i className="pi pi-check-circle text-green-400"></i>
              A global voice with local roots
            </li>
          </ul>
        </div>
        <div className="text-center mt-10">
          <p className="text-xl font-semibold text-green-300">
            We are not just reporting the news  we are building the future of it.
          </p>
          <p className="text-lg text-gray-300 mt-4">
            Welcome to <span className="text-green-400 font-semibold">DamDaily</span>. 
            Your window to the world. Our shared story.
          </p>
        </div>

      </div>
   </div>

  )

}
