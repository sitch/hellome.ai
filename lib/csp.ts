import crypto from "crypto"
import { v4 } from "uuid"

// See: https://www.hyperxiao.top/en/posts/6

/**
 * Generate Content Security Policy for the app.
 * Uses randomly generated nonce (base64)
 *
 * @returns {csp: string, nonce: string} - CSP string in first array element, nonce in the second array element.
 */
const generateCsp = (): { csp: string; nonce: string } => {
  const production = process.env.NODE_ENV === "production"

  // generate random nonce converted to base64. Must be different on every HTTP page load
  const hash = crypto.createHash("sha256")
  hash.update(v4())
  const nonce = hash.digest("base64")

  // 这里根据需求修改CSP模板
  // 注意：Next.js在dev阶段需要使用'unsafe-eval'脚本进行热刷新，因此仅需在dev阶段包含'unsafe-eval'。
  const csp = `
default-src 'self';
script-src 'self' ${production ? "" : "'unsafe-eval'"} 'nonce-${nonce}';
frame-src 'self';
base-uri 'self';
block-all-mixed-content;
font-src 'self' https: data:;
img-src * 'self' data: https;
object-src 'none';
script-src-attr 'none';
style-src 'self' https: 'unsafe-inline';
upgrade-insecure-requests;
`.replace(/\n/g, " ")

  return { csp, nonce }
}
