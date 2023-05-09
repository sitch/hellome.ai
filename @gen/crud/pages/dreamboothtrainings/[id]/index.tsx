import React from "react"

import { DreamBoothTraining } from "@prisma/client"

import { prisma } from "../../../lib/prisma"

interface DreamBoothTrainingShowProps {
  dreamboothtraining: DreamBoothTraining
}

export default function DreamBoothTrainingShow({
  dreamboothtraining,
}: DreamBoothTrainingShowProps) {
  return (
    <>
      <header>
        <h1>DreamBoothTraining #{dreamboothtraining.id.substr(0, 6)}...</h1>
      </header>
      <div className="card">
        <p>
          <strong>CreatedAt:</strong> {dreamboothtraining.createdAt}
        </p>
        <p>
          <strong>Instance_prompt:</strong> {dreamboothtraining.instance_prompt}
        </p>
        <p>
          <strong>Class_prompt:</strong> {dreamboothtraining.class_prompt}
        </p>
        <p>
          <strong>Instance_data:</strong> {dreamboothtraining.instance_data}
        </p>
        <p>
          <strong>Class_data:</strong> {dreamboothtraining.class_data}
        </p>
        <p>
          <strong>Num_class_images:</strong>{" "}
          {dreamboothtraining.num_class_images}
        </p>
        <p>
          <strong>Save_sample_prompt:</strong>{" "}
          {dreamboothtraining.save_sample_prompt}
        </p>
        <p>
          <strong>Save_sample_negative_prompt:</strong>{" "}
          {dreamboothtraining.save_sample_negative_prompt}
        </p>
        <p>
          <strong>N_save_sample:</strong> {dreamboothtraining.n_save_sample}
        </p>
        <p>
          <strong>Save_guidance_scale:</strong>{" "}
          {dreamboothtraining.save_guidance_scale}
        </p>
        <p>
          <strong>Save_infer_steps:</strong>{" "}
          {dreamboothtraining.save_infer_steps}
        </p>
        <p>
          <strong>Pad_tokens:</strong> {dreamboothtraining.pad_tokens}
        </p>
        <p>
          <strong>With_prior_preservation:</strong>{" "}
          {dreamboothtraining.with_prior_preservation}
        </p>
        <p>
          <strong>Prior_loss_weight:</strong>{" "}
          {dreamboothtraining.prior_loss_weight}
        </p>
        <p>
          <strong>Seed:</strong> {dreamboothtraining.seed}
        </p>
        <p>
          <strong>Resolution:</strong> {dreamboothtraining.resolution}
        </p>
        <p>
          <strong>Center_crop:</strong> {dreamboothtraining.center_crop}
        </p>
        <p>
          <strong>Train_text_encoder:</strong>{" "}
          {dreamboothtraining.train_text_encoder}
        </p>
        <p>
          <strong>Train_batch_size:</strong>{" "}
          {dreamboothtraining.train_batch_size}
        </p>
        <p>
          <strong>Sample_batch_size:</strong>{" "}
          {dreamboothtraining.sample_batch_size}
        </p>
        <p>
          <strong>Num_train_epochs:</strong>{" "}
          {dreamboothtraining.num_train_epochs}
        </p>
        <p>
          <strong>Max_train_steps:</strong> {dreamboothtraining.max_train_steps}
        </p>
        <p>
          <strong>Gradient_accumulation_steps:</strong>{" "}
          {dreamboothtraining.gradient_accumulation_steps}
        </p>
        <p>
          <strong>Gradient_checkpointing:</strong>{" "}
          {dreamboothtraining.gradient_checkpointing}
        </p>
        <p>
          <strong>Learning_rate:</strong> {dreamboothtraining.learning_rate}
        </p>
        <p>
          <strong>Scale_lr:</strong> {dreamboothtraining.scale_lr}
        </p>
        <p>
          <strong>Lr_scheduler:</strong> {dreamboothtraining.lr_scheduler}
        </p>
        <p>
          <strong>Lr_warmup_steps:</strong> {dreamboothtraining.lr_warmup_steps}
        </p>
        <p>
          <strong>Use_8bit_adam:</strong> {dreamboothtraining.use_8bit_adam}
        </p>
        <p>
          <strong>Adam_beta1:</strong> {dreamboothtraining.adam_beta1}
        </p>
        <p>
          <strong>Adam_beta2:</strong> {dreamboothtraining.adam_beta2}
        </p>
        <p>
          <strong>Adam_weight_decay:</strong>{" "}
          {dreamboothtraining.adam_weight_decay}
        </p>
        <p>
          <strong>Adam_epsilon:</strong> {dreamboothtraining.adam_epsilon}
        </p>
        <p>
          <strong>Max_grad_norm:</strong> {dreamboothtraining.max_grad_norm}
        </p>
      </div>
      <footer>
        <a href="/dreamboothtrainings" className="secondary-btn">
          Return to dreamboothtrainings list
        </a>
      </footer>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const dreamboothtraining = await prisma.dreamboothtraining.findUnique({
    where: { id: params.id },
  })
  return { props: { dreamboothtraining } }
}
