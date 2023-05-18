/**
 *
 * @link https://fancytailwind.com/app/fancy-laboratory/molecules/steps/steps4#link
 */
export const Steps = () => {
  const steps = [
    { id: "S1", title: "Basic Details", href: "#link", status: "completed" },
    { id: "S2", title: "Company Details", href: "#link", status: "completed" },
    { id: "S3", title: "Subscription Plan", href: "#link", status: "current" },
    { id: "S4", title: "Payment", href: "#link", status: "upcoming" },
  ]

  return (
    <nav
      className="mx-auto w-full max-w-7xl bg-transparent px-4"
      aria-label="Progress steps"
    >
      <ol className="grid auto-cols-fr grid-flow-col gap-5">
        {steps.map((step, index) => (
          <li key={step.id} className="col-span-full sm:col-auto">
            {/* :STATUS COMPLETED */}
            {step.status === "completed" && (
              <a
                href={step.href}
                className="group flex flex-col items-start border-l-4 border-blue-500 p-4 hover:border-blue-900 sm:border-l-0 sm:border-t-4"
              >
                {/* ::Step number */}
                <span className="text-sm font-semibold uppercase tracking-wide text-blue-500 group-hover:text-blue-900">{`STEP ${
                  index + 1
                }`}</span>
                {/* ::Step title */}
                <span className="text-base font-semibold text-gray-700">
                  {step.title}
                </span>
              </a>
            )}

            {/* :STATUS CURRENT */}
            {step.status === "current" && (
              <a
                href={step.href}
                className="group flex flex-col items-start border-l-4 border-blue-500 p-4 sm:border-l-0 sm:border-t-4"
              >
                {/* ::Step number */}
                <span className="text-sm font-semibold uppercase tracking-wide text-blue-500">{`STEP ${
                  index + 1
                }`}</span>
                {/* ::Step title */}
                <span className="text-base font-semibold text-gray-700">
                  {step.title}
                </span>
              </a>
            )}

            {/* :STATUS UPCOMING */}
            {step.status === "upcoming" && (
              <a
                href={step.href}
                className="group flex flex-col items-start border-l-4 border-gray-300 p-4 hover:border-gray-500 sm:border-l-0 sm:border-t-4"
              >
                {/* ::Step number */}
                <span className="text-sm font-semibold uppercase tracking-wide text-gray-500 group-hover:text-gray-600">{`STEP ${
                  index + 1
                }`}</span>
                {/* ::Step title */}
                <span className="text-base font-semibold text-gray-700">
                  {step.title}
                </span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
