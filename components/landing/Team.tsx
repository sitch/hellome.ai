// import { span
// ICON=IonIcon } from '@ionic/react'

export default function Team() {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl items-center px-5 py-24 md:px-12 lg:px-16">
        <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
          <li>
            <div className="space-y-4">
              <div className="aspect-[3/2]">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </div>
              <div className="inline-flex w-full items-start justify-between">
                <div className="space-y-1">
                  <h3 className="text-lg font-medium leading-6 text-black">
                    Annur Flint
                  </h3>
                  <p className="text-base text-gray-500">CEO at Flint LLC</p>
                </div>
                <div>
                  <ul className="flex space-x-5">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span
                          // ICON=IonIcon
                          // icon="logo-dribbble"
                          // name="logo-dribbble"
                          role="img"
                          className="md hydrated"
                          aria-label="logo dribbble"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Twitter</span>
                        <span
                          // ICON=IonIcon
                          // icon="logo-twitter"
                          // name="logo-twitter"
                          role="img"
                          className="md hydrated"
                          aria-label="logo twitter"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="space-y-4">
              <div className="aspect-[3/2]">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1602434228300-a645bce6891b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1639&q=80"
                  alt=""
                />
              </div>
              <div className="inline-flex w-full items-start justify-between">
                <div className="space-y-1">
                  <h3 className="text-lg font-medium leading-6 text-black">
                    Melonia Tusk
                  </h3>
                  <p className="text-base text-gray-500">Founder of Fesla</p>
                </div>
                <div>
                  <ul className="flex space-x-5">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span
                          // ICON=IonIcon
                          // icon="logo-dribbble"
                          // name="logo-dribbble"
                          role="img"
                          className="md hydrated"
                          aria-label="logo dribbble"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Twitter</span>
                        <span
                          // ICON=IonIcon
                          // icon="logo-twitter"
                          // name="logo-twitter"
                          role="img"
                          className="md hydrated"
                          aria-label="logo twitter"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="space-y-4">
              <div className="aspect-[3/2]">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1577202214328-c04b77cefb5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
                  alt=""
                />
              </div>
              <div className="inline-flex w-full items-start justify-between">
                <div className="space-y-1">
                  <h3 className="text-lg font-medium leading-6 text-black">
                    Jordan Peterson
                  </h3>
                  <p className="text-base text-gray-500">
                    Director at Peterson Industries
                  </p>
                </div>
                <div>
                  <ul className="flex space-x-5">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span
                          // ICON=IonIcon
                          // icon="logo-dribbble"
                          // name="logo-dribbble"
                          role="img"
                          className="md hydrated"
                          aria-label="logo dribbble"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Twitter</span>
                        <span
                          // ICON=IonIcon
                          // icon="logo-twitter"
                          // name="logo-twitter"
                          role="img"
                          className="md hydrated"
                          aria-label="logo twitter"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          {/* More people... */}
        </ul>
      </div>
    </section>
  )
}
