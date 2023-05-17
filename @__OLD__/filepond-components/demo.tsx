// const FileAdapter = ({
//   input: { value, onChange },
//   meta: { submitError, error },
// }) => (
//   <>
//     <FilePond
//       acceptedFileTypes={
//         [
//           "notRejected",
//         ] /* Give fake accepted file type to be able to validate through returning it in fileValidateTypeDetectType once validated it is not one of the rejected file types. */
//       }
//       fileValidateTypeDetectType={(source, type) =>
//         new Promise((resolve, reject) => {
//           let rejectedExtensions = [
//             "ade",
//             "adp",
//             "apk",
//             "bat",
//             "chm",
//             "cmd",
//             "com",
//             "cpl",
//             "dll",
//             "dmg",
//             "exe",
//             "hta",
//             "ins",
//             "isp",
//             "jar",
//             "js",
//             "jse",
//             "lib",
//             "lnk",
//             "mde",
//             "msc",
//             "msi",
//             "msp",
//             "mst",
//             "nsh",
//             "pif",
//             "scr",
//             "sct",
//             "shb",
//             "sys",
//             "vb",
//             "vbe",
//             "vbs",
//             "vxd",
//             "wsc",
//             "wsf",
//             "wsh",
//             "cab",
//           ]
//           // If the file extension is not in our rejected list.
//           if (
//             !rejectedExtensions.some((ext) => source.name.endsWith("." + ext))
//           ) {
//             resolve("notRejected")
//           }
//           // Otherwise it is rejected.
//           resolve(type)
//         })
//       }
//       name="file"
//       allowMultiple
//       maxParallelUploads="1"
//       id="contact-form-id-file"
//       maxTotalFileSize="5MB"
//       onremovefile={
//         () => {
//           onChange(
//             value
//               .filter((file) => !file.hasOwnProperty("error"))
//               .map((file) => file),
//           )
//         } /* Remove error messages of rejected file types once you remove on of the erroneous files. */
//       }
//       labelIdle='Drag &amp; Drop your files or <span tabindex="4" class="filepond--custom-label-action">Browse</span>.'
//       server={{
//         process: {
//           withCredentials: true,
//           url: "/api/contact/upload",
//           headers: {
//             "X-XSRF-TOKEN": axios.defaults.headers.post["X-XSRF-TOKEN"], // Give CSRF token to process header to validate source.
//           },
//           ondata: (formData) => {
//             // Before sending the files to the server, append size of the current file and the order of the file; order to delete all previous files if the current file is the first, even though the session ID didn't change, and size to validate against total size of files uploaded.
//             formData.append("size", formData.getAll("file")[1].size)
//             formData.append("quantity", value.length)
//             return formData
//           },
//           onload: (response) => {
//             // Once response is received, pushed new value to Final Form value variable, and populate through the onChange handler.
//             value.push(JSON.parse(response))
//             onChange(value.map((file) => file))
//             return JSON.parse(response).filename
//           },
//           onerror: (response) => {
//             // If error transpires, add error to value with error message.
//             value.push({ error: response })
//             onChange(value.map((file) => file))
//             return response
//           },
//         },
//         revert: {
//           withCredentials: true,
//           url: "/api/contact/revert",
//           headers: {
//             "X-XSRF-TOKEN": axios.defaults.headers.post["X-XSRF-TOKEN"], // Give CSRF token to process header to validate source.
//           },
//           onload: (response) => {
//             // Update value through onChange once DELETE request sent.
//             onChange(
//               value
//                 .filter((file) => file.filename !== response)
//                 .map((file) => file),
//             )
//             return response
//           },
//         },
//       }}
//     />
//     {(error || submitError) && (
//       <div className="message message--error">{submitError || error}</div>
//     )}
//   </>
// )

export const TEMP = {}
