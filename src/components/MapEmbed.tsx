export default function MapEmbed() {
  return (
    <div className="w-full h-96 overflow-hidden rounded-lg shadow">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8490383102073!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3dca0c9edb3%3A0x5a9f1e4d49dc88d1!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1687434248365!5m2!1sen!2sin"
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
      ></iframe>
    </div>
  );
}
