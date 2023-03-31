import classNames from 'classnames'
import { useCallback, useRef } from 'react'
import emailStyles from '@/components/forms/EmailInput.module.css'

const regex = new RegExp(
  '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
    '(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' +
    '|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
)

// document.querySelectorAll('.email-input').forEach(container => {

//   let input = container.querySelector('input')

//   input.addEventListener('keyup', e => container.classList.toggle('valid', regex.test(input.value)))

// });

export type EmailInputProps = {
  // type?: EmailInputType
}

// See: https://codepen.io/aaroniker/pen/PoqzyOG
// See: https://codepen.io/aaroniker/pen/VdRRpM
export default function EmailInput(props: EmailInputProps) {
  const container = useRef(null)

  // // Event handler utilizing useCallback ...
  // // ... so that reference never changes.
  // const handler = useCallback(

  //   e => container.current?.classList.toggle('valid', regex.test(input.value)),

  //   []
  // );
  // // Add event listener using our hook
  // useEventListener("keyup", handler);

  return (
    <>
      <div
        className={classNames({
          [emailStyles['email-input']]: true,
          'email-input': true,
          // 'valid': regex.test(input.value),
          valid: true,
        })}
      >
        <input type="email" placeholder="aaron@gmail.com" />
        <svg viewBox="0 0 18 18">
          <path d="M11.5,10.5 C6.4987941,17.5909626 1,3.73719105 11.5,6 C10.4594155,14.5485365 17,13.418278 17,9 C17,4.581722 13.418278,1 9,1 C4.581722,1 1,4.581722 1,9 C1,13.418278 4.581722,17 9,17 C13.418278,17 17,13.42 17,9"></path>
          <polyline points="5 9.25 8 12 13 6"></polyline>
        </svg>
      </div>

      {/* <a
        className="dribbble"
        href="https://dribbble.com/ai"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg"
          alt=""
        />
      </a>
      <a
        className="twitter"
        target="_blank"
        href="https://twitter.com/aaroniker_me"
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="72"
          viewBox="0 0 72 72"
        >
          <path d="M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z"></path>
        </svg>
      </a> */}
    </>
  )
}
