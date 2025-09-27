import React, { useState } from "react";

function Contect() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    error: null,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    if (!form.name.trim()) return "Name is required.";
    if (!form.email.trim()) return "Email is required.";
    const re = /^\S+@\S+\.\S+$/;
    if (!re.test(form.email)) return "Please enter a valid email.";
    if (!form.message.trim()) return "Message cannot be empty.";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ submitting: false, success: null, error: err });
      return;
    }

    setStatus({ submitting: true, success: null, error: null });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Server error");
      }

      setForm({ name: "", email: "", message: "" });
      setStatus({
        submitting: false,
        success: "Message sent successfully!",
        error: null,
      });
    } catch (error) {
      setStatus({
        submitting: false,
        success: null,
        error: error.message || "Failed to send message.",
      });
    }
  }

  return (
    <main className="min-h-screen bg-blue-50 flex">
      {/* Left Sidebar */}
      <div className="hidden md:block w-1/4 bg-gray-400 shadow-black"></div>

      {/* Contact Form */}
      <div className="flex-1 flex items-center justify-center py-10 px-4 min-w-2/12">
        <section className="p-8 bg-white rounded-2xl shadow-lg w-full  max-w-lg">
          <h2 className="text-2xl font-semibold mb-4">Send a message</h2>

          {status.error && (
            <div role="alert" className="mb-4 p-3 rounded-md bg-red-50 text-red-700">
              {status.error}
            </div>
          )}

          {status.success && (
            <div role="status" className="mb-4 p-3 rounded-md bg-green-50 text-green-700">
              {status.success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your name"
                aria-required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="you@example.com"
                aria-required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Write your message..."
                aria-required
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={status.submitting}
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 disabled:opacity-60"
              >
                {status.submitting ? "Sending..." : "Send message"}
              </button>

              <button
                type="button"
                onClick={() => setForm({ name: "", email: "", message: "" })}
                className="px-3 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                Reset
              </button>
            </div>

            <p className="text-xs text-gray-500">
              We respect your privacy. Your details won't be shared.
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Contect;
