---
title: LangChain
icon: langchain
date: 2026-10-11
description: LangChain
---

## 模型初始化

`init_chat_model` 是对 ChatOpenAI、ChatDeepSeek 等厂商的驱动类进行统一封装的 API。

::: tabs#DeepSeek

@tab <Py /> main.py

```python
from langchain.chat_models import init_chat_model
from dotenv import load_dotenv
import os

# 读取.env文件
load_dotenv(override=True)
DEEPSEEK_API_KEY = os.getenv("DEEPSEEK_API_KEY")
DEEPSEEK_BASE_URL = os.getenv("DEEPSEEK_BASE_URL")

openai_modal = init_chat_model(
    model="deepseek-flash",
    api_key=DEEPSEEK_API_KEY,
    base_url=DEEPSEEK_BASE_URL,
)

openai_modal.invoke("What is LangChain?")
```

@tab .env

```
# https://platform.deepseek.com/api_keys
DEEPSEEK_API_KEY=***
DEEPSEEK_BASE_URL=https://api.deepseek.com
```

:::

参数说明：

- `modal`：模型名称。

- `model_provider`：模型厂商。

- `api_key`：API 密钥。

- `base_url`：厂商 API 请求地址。

- `temperature`：用于控制随机性的模型温度。

  - 0.0 ~ 0.3：精确任务（数学计算、代码生成、翻译）。
  
  - 0.4 ~ 0.7：平衡输出（客服聊天、知识问答）。
  
  - 0.8 ~ 1.0+：创意写作（文案创作、头脑风暴）。
  
- `max_tokens`：限制模型输出的最大 token 数量。

- `timeout`：超时时间。

- `max_retries`：请求失败的最大重试次数。