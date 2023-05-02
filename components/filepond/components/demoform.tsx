{
  /* <Form
  onSubmit={this.onSubmit}
  subscription={{
    submitting: true,
    pristine: true,
    submitSucceeded: true,
    submitError: true,
  }} // Optimize performance through subscription.
  initialValues={{ files: [] }} // Declare files as array as doing it in FilePond's onInit fires off more than once.
  render={({
    submitError,
    handleSubmit,
    submitting,
    pristine,
    submitSucceeded,
  }) => (
    <form className="form-contact text-justify" onSubmit={handleSubmit}>
      <div className="form-contact__fieldset form-contact__fieldset--file fieldset">
        <label htmlFor="contact-form-id-file">
          File <small className="optional-text">(optional)</small>
        </label>
        <Field name="files" component={FileAdapter} />
      </div>
      {submitError ? (
        <div className="message message--error">{submitError}</div>
      ) : (
        submitSucceeded && (
          <div className="message message--success">
            Thank you for contacting us. We will soon be in touch.
          </div>
        )
      )}
      <button
        type="submit"
        disabled={submitting || pristine || submitSucceeded}
      >
        {submitting ? (
          <Spinner
            className="spinner--button form-contact__spinner"
            fadeIn="quarter"
            name="line-scale-pulse-out-rapid"
          />
        ) : submitSucceeded ? (
          "Message Sent"
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  )}
/>; */
}
