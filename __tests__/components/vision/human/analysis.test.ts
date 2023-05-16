import { runFaceAnalysis } from "@/components/vision/human/analysis"
import { defaultFaceAnalysis } from "@/components/vision/human/defaults"
import { isUsable } from "@/components/vision/human/validations"

import { DEFAULT_RESULT, human } from "./fixtures"

describe("Given: DEFAULT_RESULT", () => {
  const result = DEFAULT_RESULT

  // describe('.runFaceAnalysis/1', () => {
  //     const vectors = runFaceAnalysis(result)
  //     expect(vectors).toMatchSnapshot()
  // })

  describe(".runFaceAnalysis/2", () => {
    it("Given: defaultFaceAnalysis", async () => {
      const prevAnalysis = defaultFaceAnalysis

      expect(isUsable(prevAnalysis.coordinates, result)).toEqual(true)

      const vectors = await runFaceAnalysis(human, result, prevAnalysis)
      expect(vectors).toMatchSnapshot()
    })
  })
})
