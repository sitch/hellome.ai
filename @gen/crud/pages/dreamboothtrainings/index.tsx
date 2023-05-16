import React from "react"

import { DreamBoothTraining } from "@prisma/client"

import { prisma } from "../../lib/prisma"

interface DreamBoothTrainingIndexProps {
  dreamboothtrainings: DreamBoothTraining[]
}

export default function DreamBoothTrainingIndex({
  dreamboothtrainings,
}: DreamBoothTrainingIndexProps) {
  function handleDelete(id: string) {
    fetch(`/api/dreamboothtrainings/${id}`, { method: "DELETE" }).then(() => {
      alert("DreamBoothTraining deleted")
      location.reload()
    })
  }

  return (
    <>
      <header>
        <h1>All DreamBoothTrainings</h1>
        <a href="/dreamboothtrainings/create" className="secondary-btn">
          + Create new dreamboothtraining
        </a>
      </header>
      <div className="table">
        <div className="row header">
          <div className="cell">CreatedAt</div>
          <div className="cell">Instance_prompt</div>
          <div className="cell">Class_prompt</div>
          <div className="cell">Instance_data</div>
          <div className="cell">Class_data</div>
          <div className="cell">Num_class_images</div>
          <div className="cell">Save_sample_prompt</div>
          <div className="cell">Save_sample_negative_prompt</div>
          <div className="cell">N_save_sample</div>
          <div className="cell">Save_guidance_scale</div>
          <div className="cell">Save_infer_steps</div>
          <div className="cell">Pad_tokens</div>
          <div className="cell">With_prior_preservation</div>
          <div className="cell">Prior_loss_weight</div>
          <div className="cell">Seed</div>
          <div className="cell">Resolution</div>
          <div className="cell">Center_crop</div>
          <div className="cell">Train_text_encoder</div>
          <div className="cell">Train_batch_size</div>
          <div className="cell">Sample_batch_size</div>
          <div className="cell">Num_train_epochs</div>
          <div className="cell">Max_train_steps</div>
          <div className="cell">Gradient_accumulation_steps</div>
          <div className="cell">Gradient_checkpointing</div>
          <div className="cell">Learning_rate</div>
          <div className="cell">Scale_lr</div>
          <div className="cell">Lr_scheduler</div>
          <div className="cell">Lr_warmup_steps</div>
          <div className="cell">Use_8bit_adam</div>
          <div className="cell">Adam_beta1</div>
          <div className="cell">Adam_beta2</div>
          <div className="cell">Adam_weight_decay</div>
          <div className="cell">Adam_epsilon</div>
          <div className="cell">Max_grad_norm</div>
          <div className="cell">Actions</div>
        </div>
        {dreamboothtrainings.map((dreamboothtraining) => (
          <div className="row" key={dreamboothtraining.id}>
            <div className="cell" data-title="createdAt">
              {dreamboothtraining.createdAt}
            </div>
            <div className="cell" data-title="instance_prompt">
              {dreamboothtraining.instance_prompt}
            </div>
            <div className="cell" data-title="class_prompt">
              {dreamboothtraining.class_prompt}
            </div>
            <div className="cell" data-title="instance_data">
              {dreamboothtraining.instance_data}
            </div>
            <div className="cell" data-title="class_data">
              {dreamboothtraining.class_data}
            </div>
            <div className="cell" data-title="num_class_images">
              {dreamboothtraining.num_class_images}
            </div>
            <div className="cell" data-title="save_sample_prompt">
              {dreamboothtraining.save_sample_prompt}
            </div>
            <div className="cell" data-title="save_sample_negative_prompt">
              {dreamboothtraining.save_sample_negative_prompt}
            </div>
            <div className="cell" data-title="n_save_sample">
              {dreamboothtraining.n_save_sample}
            </div>
            <div className="cell" data-title="save_guidance_scale">
              {dreamboothtraining.save_guidance_scale}
            </div>
            <div className="cell" data-title="save_infer_steps">
              {dreamboothtraining.save_infer_steps}
            </div>
            <div className="cell" data-title="pad_tokens">
              {dreamboothtraining.pad_tokens}
            </div>
            <div className="cell" data-title="with_prior_preservation">
              {dreamboothtraining.with_prior_preservation}
            </div>
            <div className="cell" data-title="prior_loss_weight">
              {dreamboothtraining.prior_loss_weight}
            </div>
            <div className="cell" data-title="seed">
              {dreamboothtraining.seed}
            </div>
            <div className="cell" data-title="resolution">
              {dreamboothtraining.resolution}
            </div>
            <div className="cell" data-title="center_crop">
              {dreamboothtraining.center_crop}
            </div>
            <div className="cell" data-title="train_text_encoder">
              {dreamboothtraining.train_text_encoder}
            </div>
            <div className="cell" data-title="train_batch_size">
              {dreamboothtraining.train_batch_size}
            </div>
            <div className="cell" data-title="sample_batch_size">
              {dreamboothtraining.sample_batch_size}
            </div>
            <div className="cell" data-title="num_train_epochs">
              {dreamboothtraining.num_train_epochs}
            </div>
            <div className="cell" data-title="max_train_steps">
              {dreamboothtraining.max_train_steps}
            </div>
            <div className="cell" data-title="gradient_accumulation_steps">
              {dreamboothtraining.gradient_accumulation_steps}
            </div>
            <div className="cell" data-title="gradient_checkpointing">
              {dreamboothtraining.gradient_checkpointing}
            </div>
            <div className="cell" data-title="learning_rate">
              {dreamboothtraining.learning_rate}
            </div>
            <div className="cell" data-title="scale_lr">
              {dreamboothtraining.scale_lr}
            </div>
            <div className="cell" data-title="lr_scheduler">
              {dreamboothtraining.lr_scheduler}
            </div>
            <div className="cell" data-title="lr_warmup_steps">
              {dreamboothtraining.lr_warmup_steps}
            </div>
            <div className="cell" data-title="use_8bit_adam">
              {dreamboothtraining.use_8bit_adam}
            </div>
            <div className="cell" data-title="adam_beta1">
              {dreamboothtraining.adam_beta1}
            </div>
            <div className="cell" data-title="adam_beta2">
              {dreamboothtraining.adam_beta2}
            </div>
            <div className="cell" data-title="adam_weight_decay">
              {dreamboothtraining.adam_weight_decay}
            </div>
            <div className="cell" data-title="adam_epsilon">
              {dreamboothtraining.adam_epsilon}
            </div>
            <div className="cell" data-title="max_grad_norm">
              {dreamboothtraining.max_grad_norm}
            </div>
            <div className="cell actions" data-title="actions">
              <div className="action-buttons">
                <a
                  href={`dreamboothtrainings/${dreamboothtraining.id}`}
                  className="secondary-btn small"
                >
                  &#128065; Show
                </a>
                <a
                  href={`dreamboothtrainings/${dreamboothtraining.id}/edit`}
                  className="secondary-btn small"
                >
                  &#9998; Edit
                </a>
                <a
                  href="#"
                  onClick={() => handleDelete(dreamboothtraining.id)}
                  className="secondary-btn small danger"
                >
                  &#128465; Delete
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer>
        <a href="/" className="secondary-btn">
          Return to Dashboard
        </a>
      </footer>
    </>
  )
}

export async function getServerSideProps() {
  const dreamboothtrainings = await prisma.dreamboothtraining.findMany()
  return { props: { dreamboothtrainings } }
}
