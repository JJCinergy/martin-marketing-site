export default function Testimonials() {
  const testimonials = [
    {
      quote: "I love this script app. It&apos;s a really good simple idea that is so obvious it hurts. It&apos;s so flexible, that people can make it as complex and rich as a production is willing to go. Other software is clearly made by &apos;tech bros,&apos; and not industry folks. Cinergy just gets it.",
      author: "James Bolenbaugh",
      role: "Art Director HBO&apos;s Westworld",
      union: "ADG Local 800",
      photo: "james-bolenbaugh.jpg"
    },
    {
      quote: "A script breakdown in under 3 minutes is like magic, it saves me time and helps me finish budgets days faster!",
      author: "Andrew Wheeler",
      role: "Production Accountant",
      photo: "andy-wheeler-photo.jpg"
    },
    {
      quote: "The layout is great. It&apos;s so intuitive and quick. The way that everything is assimilated is simple. And It has to be, our days can be so chaotic- it&apos;s incredibly helpful that it covers everything.",
      author: "Susannah McCarthy",
      role: "Prop Master",
      union: "IA Local 52",
      photo: "susannah-mccarthy.jpg"
    },
    {
      quote: "I can&apos;t tell you how much I dislike creating a set list, and this made it much easier.",
      author: "Andy Ecklund",
      role: "Art Director",
      union: "IA Local 829",
      photo: "andy_eckland.jpg"
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">What Industry Professionals Say</h2>
          <p className="text-xl text-gray-600">Trusted by the best in the business</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <svg className="w-10 h-10 text-gray-300 mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-lg text-gray-700 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-start gap-4">
                {testimonial.photo && (
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                  {testimonial.union && (
                    <p className="text-gray-600 text-sm">{testimonial.union}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}