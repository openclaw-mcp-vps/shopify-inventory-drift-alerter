export default function Home() {
  const faqs = [
    {
      q: "How does inventory drift detection work?",
      a: "We connect to your Shopify store via API, pull real-time inventory and sales data, then compare against rolling forecasts. When actual stock deviates beyond your threshold, you get an instant alert."
    },
    {
      q: "What alert channels are supported?",
      a: "Email and SMS alerts are included. You can configure per-SKU thresholds and choose which channels receive which severity levels."
    },
    {
      q: "Do you support stores with many SKUs?",
      a: "Yes. The app is built for stores with 100+ SKUs. Background jobs process inventory checks in batches so performance stays consistent regardless of catalog size."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Shopify Inventory Intelligence
        </span>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Know Before You Run Out —<br />
          <span className="text-[#58a6ff]">Or Overstock</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Monitors your Shopify inventory against sales forecasts and fires email or SMS alerts the moment stock drifts off course. Built for stores with 100+ SKUs.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Monitoring — $15/mo
        </a>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl p-8 bg-[#161b22] max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-[#c9d1d9] text-sm">
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span> Unlimited SKU monitoring</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span> Email + SMS alerts</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span> Custom drift thresholds per SKU</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span> Shopify webhook + API sync</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span> 30-day forecast history</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
