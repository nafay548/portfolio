import { useState, useEffect } from "react";
import "./styles/BookingModal.css";

const BookingModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "Morning (9:00 AM - 12:00 PM EST)",
    service: "Real Estate Video Editing",
    notes: "",
  });

  useEffect(() => {
    const handleOpenModal = () => {
      setIsOpen(true);
      setIsSuccess(false);
    };

    window.addEventListener("openBookingModal", handleOpenModal);
    return () => {
      window.removeEventListener("openBookingModal", handleOpenModal);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "Morning (9:00 AM - 12:00 PM EST)",
        service: "Real Estate Video Editing",
        notes: "",
      });
    }, 400);
  };

  const minDate = new Date().toISOString().split("T")[0];

  return (
    <div className={`booking-modal-overlay ${isOpen ? "active" : ""}`} onClick={closeModal}>
      <div className="booking-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="booking-close-btn" onClick={closeModal} aria-label="Close modal">
          ✕
        </button>

        {!isSuccess ? (
          <>
            <div className="booking-modal-header">
              <h3>Book a Zoom Meeting</h3>
              <p>
                Select a date and time that works for you. I will send a calendar invite and Zoom link directly to your email!
              </p>
            </div>

            <form
              className="booking-form"
              action="https://formsubmit.co/runmediamarketingagency@gmail.com"
              method="POST"
              target="_blank"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_subject" value={`New Zoom Meeting Booking: ${formData.name} - ${formData.service}`} />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Needed</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange}>
                    <option value="Real Estate Video Editing">Real Estate Video Editing</option>
                    <option value="Talking Head / Podcast Clips">Talking Head / Podcast Clips</option>
                    <option value="Cinematic Luxury Listing">Cinematic Luxury Listing</option>
                    <option value="Custom Content Creation">Custom Content Creation</option>
                    <option value="General Consultation">General Consultation</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Preferred Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    min={minDate}
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Preferred Time Slot *</label>
                  <select id="time" name="time" value={formData.time} onChange={handleChange}>
                    <option value="Morning (9:00 AM - 12:00 PM EST)">Morning (9:00 AM - 12:00 PM EST)</option>
                    <option value="Afternoon (1:00 PM - 4:00 PM EST)">Afternoon (1:00 PM - 4:00 PM EST)</option>
                    <option value="Evening (5:00 PM - 8:00 PM EST)">Evening (5:00 PM - 8:00 PM EST)</option>
                    <option value="Flexible / Anytime">Flexible / Anytime</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="notes">Project Goals & Notes</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  placeholder="Tell me about your content, goals, or any specific questions you have..."
                  value={formData.notes}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="booking-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending Request...
                  </>
                ) : (
                  "Confirm Appointment"
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="booking-success">
            <div className="success-icon">✓</div>
            <h4>Appointment Requested!</h4>
            <p>
              Thank you, <strong>{formData.name}</strong>! We have received your booking request for a Zoom meeting on{" "}
              <strong>{formData.date}</strong> during the <strong>{formData.time}</strong> slot.
            </p>
            <p style={{ fontSize: "14px", color: "#c2a4ff" }}>
              We will review your booking request and email a Zoom calendar invite to <strong>{formData.email}</strong> shortly!
            </p>
            <button className="success-done-btn" onClick={closeModal}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
