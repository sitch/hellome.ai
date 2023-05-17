import React, { FormEvent, useState } from "react"
import { useRouter } from "next/router"

export default function DreamBoothTrainingEdit({ dreamboothtraining }) {
  const [formState, setFormState] = useState(dreamboothtraining)
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch(`/api/dreamboothtrainings/${dreamboothtraining.id}`, {
      method: "PUT",
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        alert("DreamBoothTraining updated!")
        router.push(`/dreamboothtrainings/${dreamboothtraining.id}`)
      }
    })
  }

  return (
    <>
      <header>
        <h1>Edit DreamBoothTraining</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="createdAt">CreatedAt:</label>
          <input
            type="text"
            id="createdAt"
            value={formState.createdAt}
            onChange={(e) =>
              setFormState({ ...formState, createdAt: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="instance_prompt">Instance_prompt:</label>
          <input
            type="text"
            id="instance_prompt"
            value={formState.instance_prompt}
            onChange={(e) =>
              setFormState({ ...formState, instance_prompt: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="class_prompt">Class_prompt:</label>
          <input
            type="text"
            id="class_prompt"
            value={formState.class_prompt}
            onChange={(e) =>
              setFormState({ ...formState, class_prompt: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="instance_data">Instance_data:</label>
          <input
            type="text"
            id="instance_data"
            value={formState.instance_data}
            onChange={(e) =>
              setFormState({ ...formState, instance_data: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="class_data">Class_data:</label>
          <input
            type="text"
            id="class_data"
            value={formState.class_data}
            onChange={(e) =>
              setFormState({ ...formState, class_data: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="num_class_images">Num_class_images:</label>
          <input
            type="text"
            id="num_class_images"
            value={formState.num_class_images}
            onChange={(e) =>
              setFormState({ ...formState, num_class_images: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="save_sample_prompt">Save_sample_prompt:</label>
          <input
            type="text"
            id="save_sample_prompt"
            value={formState.save_sample_prompt}
            onChange={(e) =>
              setFormState({ ...formState, save_sample_prompt: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="save_sample_negative_prompt">
            Save_sample_negative_prompt:
          </label>
          <input
            type="text"
            id="save_sample_negative_prompt"
            value={formState.save_sample_negative_prompt}
            onChange={(e) =>
              setFormState({
                ...formState,
                save_sample_negative_prompt: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="n_save_sample">N_save_sample:</label>
          <input
            type="text"
            id="n_save_sample"
            value={formState.n_save_sample}
            onChange={(e) =>
              setFormState({ ...formState, n_save_sample: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="save_guidance_scale">Save_guidance_scale:</label>
          <input
            type="text"
            id="save_guidance_scale"
            value={formState.save_guidance_scale}
            onChange={(e) =>
              setFormState({
                ...formState,
                save_guidance_scale: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="save_infer_steps">Save_infer_steps:</label>
          <input
            type="text"
            id="save_infer_steps"
            value={formState.save_infer_steps}
            onChange={(e) =>
              setFormState({ ...formState, save_infer_steps: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="pad_tokens">Pad_tokens:</label>
          <input
            type="text"
            id="pad_tokens"
            value={formState.pad_tokens}
            onChange={(e) =>
              setFormState({ ...formState, pad_tokens: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="with_prior_preservation">
            With_prior_preservation:
          </label>
          <input
            type="text"
            id="with_prior_preservation"
            value={formState.with_prior_preservation}
            onChange={(e) =>
              setFormState({
                ...formState,
                with_prior_preservation: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="prior_loss_weight">Prior_loss_weight:</label>
          <input
            type="text"
            id="prior_loss_weight"
            value={formState.prior_loss_weight}
            onChange={(e) =>
              setFormState({ ...formState, prior_loss_weight: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="seed">Seed:</label>
          <input
            type="text"
            id="seed"
            value={formState.seed}
            onChange={(e) =>
              setFormState({ ...formState, seed: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="resolution">Resolution:</label>
          <input
            type="text"
            id="resolution"
            value={formState.resolution}
            onChange={(e) =>
              setFormState({ ...formState, resolution: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="center_crop">Center_crop:</label>
          <input
            type="text"
            id="center_crop"
            value={formState.center_crop}
            onChange={(e) =>
              setFormState({ ...formState, center_crop: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="train_text_encoder">Train_text_encoder:</label>
          <input
            type="text"
            id="train_text_encoder"
            value={formState.train_text_encoder}
            onChange={(e) =>
              setFormState({ ...formState, train_text_encoder: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="train_batch_size">Train_batch_size:</label>
          <input
            type="text"
            id="train_batch_size"
            value={formState.train_batch_size}
            onChange={(e) =>
              setFormState({ ...formState, train_batch_size: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="sample_batch_size">Sample_batch_size:</label>
          <input
            type="text"
            id="sample_batch_size"
            value={formState.sample_batch_size}
            onChange={(e) =>
              setFormState({ ...formState, sample_batch_size: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="num_train_epochs">Num_train_epochs:</label>
          <input
            type="text"
            id="num_train_epochs"
            value={formState.num_train_epochs}
            onChange={(e) =>
              setFormState({ ...formState, num_train_epochs: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="max_train_steps">Max_train_steps:</label>
          <input
            type="text"
            id="max_train_steps"
            value={formState.max_train_steps}
            onChange={(e) =>
              setFormState({ ...formState, max_train_steps: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="gradient_accumulation_steps">
            Gradient_accumulation_steps:
          </label>
          <input
            type="text"
            id="gradient_accumulation_steps"
            value={formState.gradient_accumulation_steps}
            onChange={(e) =>
              setFormState({
                ...formState,
                gradient_accumulation_steps: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="gradient_checkpointing">
            Gradient_checkpointing:
          </label>
          <input
            type="text"
            id="gradient_checkpointing"
            value={formState.gradient_checkpointing}
            onChange={(e) =>
              setFormState({
                ...formState,
                gradient_checkpointing: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="learning_rate">Learning_rate:</label>
          <input
            type="text"
            id="learning_rate"
            value={formState.learning_rate}
            onChange={(e) =>
              setFormState({ ...formState, learning_rate: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="scale_lr">Scale_lr:</label>
          <input
            type="text"
            id="scale_lr"
            value={formState.scale_lr}
            onChange={(e) =>
              setFormState({ ...formState, scale_lr: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="lr_scheduler">Lr_scheduler:</label>
          <input
            type="text"
            id="lr_scheduler"
            value={formState.lr_scheduler}
            onChange={(e) =>
              setFormState({ ...formState, lr_scheduler: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="lr_warmup_steps">Lr_warmup_steps:</label>
          <input
            type="text"
            id="lr_warmup_steps"
            value={formState.lr_warmup_steps}
            onChange={(e) =>
              setFormState({ ...formState, lr_warmup_steps: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="use_8bit_adam">Use_8bit_adam:</label>
          <input
            type="text"
            id="use_8bit_adam"
            value={formState.use_8bit_adam}
            onChange={(e) =>
              setFormState({ ...formState, use_8bit_adam: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="adam_beta1">Adam_beta1:</label>
          <input
            type="text"
            id="adam_beta1"
            value={formState.adam_beta1}
            onChange={(e) =>
              setFormState({ ...formState, adam_beta1: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="adam_beta2">Adam_beta2:</label>
          <input
            type="text"
            id="adam_beta2"
            value={formState.adam_beta2}
            onChange={(e) =>
              setFormState({ ...formState, adam_beta2: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="adam_weight_decay">Adam_weight_decay:</label>
          <input
            type="text"
            id="adam_weight_decay"
            value={formState.adam_weight_decay}
            onChange={(e) =>
              setFormState({ ...formState, adam_weight_decay: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="adam_epsilon">Adam_epsilon:</label>
          <input
            type="text"
            id="adam_epsilon"
            value={formState.adam_epsilon}
            onChange={(e) =>
              setFormState({ ...formState, adam_epsilon: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="max_grad_norm">Max_grad_norm:</label>
          <input
            type="text"
            id="max_grad_norm"
            value={formState.max_grad_norm}
            onChange={(e) =>
              setFormState({ ...formState, max_grad_norm: e.target.value })
            }
          />
        </div>
        <footer>
          <button type="submit" className="primary-btn">
            Update
          </button>
          <a href="/dreamboothtrainings" className="secondary-btn">
            Return to dreamboothtrainings list
          </a>
        </footer>
      </form>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const dreamboothtraining = await prisma.dreamboothtraining.findUnique({
    where: { id: params.id },
  })
  return { props: { dreamboothtraining } }
}
