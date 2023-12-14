export const types = ["Cloudflare", "Hugging Face"]

export const models = [
  {
    id: "@cf/meta/llama-2-7b-chat-fp16",
    name: "llama-2-7b-chat-fp16",
    description:
      "Most capable GPT-3 model. Can do any task the other models can do, often with higher quality, longer output and better instruction-following. Also supports inserting completions within text.",
    type: "Cloudflare",
    strengths:
      "Complex intent, cause and effect, creative generation, search, summarization for audience",
  },
  {
    id: "@cf/meta/llama-2-7b-chat-int8",
    name: "llama-2-7b-chat-int8  ",
    description: "Very capable, but faster and lower cost than Davinci.",
    type: "GPT-3",
    strengths:
      "Language translation, complex classification, sentiment, summarization",
  },
  {
    id: "@cf/mistral/mistral-7b-instruct-v0.1",
    name: "mistral-7b-instruct-v0.1",
    description: "Capable of straightforward tasks, very fast, and lower cost.",
    type: "Cloudflare",
    strengths: "Moderate classification, semantic search",
  },
  {
    id: "@hf/thebloke/codellama-7b-instruct-awq",
    name: "codellama-7b-instruct-awq",
    description:
      "Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.",
    type: "Hugging Face",
    strengths:
      "Parsing text, simple classification, address correction, keywords",
  },
  {
    id: "@hf/thebloke/llama-2-13b-chat-awq",
    name: "llama-2-13b-chat-awq",
    description:
      "Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.",
    type: "Hugging Face",
    strengths:
      "Parsing text, simple classification, address correction, keywords",
  },
  {
    id: "@hf/thebloke/zephyr-7b-beta-awq",
    name: "zephyr-7b-beta-awq",
    description:
      "Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.",
    type: "Hugging Face",
    strengths:
      "Parsing text, simple classification, address correction, keywords",
  },
  {
    id: "@hf/thebloke/mistral-7b-instruct-v0.1-awq",
    name: "mistral-7b-instruct-v0.1-awq",
    description:
      "Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.",
    type: "Hugging Face",
    strengths:
      "Parsing text, simple classification, address correction, keywords",
  },
  {
    id: "@hf/thebloke/openchat_3.5-awq",
    name: "openchat_3.5-awq",
    description:
      "Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.",
    type: "Hugging Face",
    strengths:
      "Parsing text, simple classification, address correction, keywords",
  },
  {
    id: "@hf/thebloke/openhermes-2.5-mistral-7b-awq",
    name: "openhermes-2.5-mistral-7b-awq",
    description:
      "Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.",
    type: "Hugging Face",
    strengths:
      "Parsing text, simple classification, address correction, keywords",
  },
  {
    id: "@hf/thebloke/starling-lm-7b-alpha-awq",
    name: "starling-lm-7b-alpha-awq",
    description:
      "Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.",
    type: "Hugging Face",
    strengths:
      "Parsing text, simple classification, address correction, keywords",
  },
  {
    id: "@hf/thebloke/orca-2-13b-awq",
    name: "orca-2-13b-awq",
    description:
      "Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.",
    type: "Hugging Face",
    strengths:
      "Parsing text, simple classification, address correction, keywords",
  },
  {
    id: "@hf/thebloke/neural-chat-7b-v3-1-awq",
    name: "neural-chat-7b-v3-1-awq",
    description:
      "Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.",
    type: "Hugging Face",
    strengths:
      "Parsing text, simple classification, address correction, keywords",
  },
]
