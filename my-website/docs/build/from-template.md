---
sidebar_position: 2
---

# Build from Template

This guide shows you how to quickly create an audit agent using the Agent4rena template.

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/solidity-audit-agent.git
cd solidity-audit-agent

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install the package
pip install -e .

# Create .env file from example
cp .env.example .env
# Edit .env with your configuration
```

## Configuration
Create a `.env` file from `.env.example` and set the variables.

```
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=o3-mini

# Logging
LOG_LEVEL=INFO
LOG_FILE=agent.log
```

## Customization
Edit the prompt files to fine-tune the agent.

```bash
# Change the directory to prompt files folder
cd agent/services/prompts
# Show all prompt files
ls
```

- ``



