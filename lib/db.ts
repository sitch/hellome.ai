import { prisma } from '@/server/utils/prisma'
import { Prediction, Prisma } from '@prisma/client'

export async function upsertPrediction(predictionData: Prediction) {
  console.log('🤔 upsert prediction? ', predictionData.id)

  if (predictionData.status !== 'succeeded') {
    console.log('🙈 skipping incomplete or unsuccessful prediction')
    return
  }

  const prediction = {
    uuid: `${predictionData.id}`,
    input: predictionData.input as Prisma.InputJsonValue,
    output: predictionData.output as Prisma.InputJsonValue,
    status: predictionData.status,
    created_at: predictionData.created_at,
    started_at: predictionData.started_at,
    completed_at: predictionData.completed_at,
    version: predictionData.version,
    metrics: predictionData.metrics as Prisma.InputJsonValue,
    error: predictionData.error,
  }

  try {
    await prisma.prediction.upsert({
      where: {
        uuid: prediction.uuid,
      },
      update: prediction,
      create: prediction,
    })

    console.log('✅ upserted prediction ', prediction.uuid)
  } catch (e) {
    console.error(e)
  } finally {
    await prisma.$disconnect()
  }
}

export async function getRecentPredictions() {
  const predictions = await prisma.prediction.findMany({
    orderBy: [
      {
        id: 'asc',
      },
    ],
    select: {
      uuid: true,
      input: true,
      output: true,
    },
    take: 1000,
  })
  return predictions
}
