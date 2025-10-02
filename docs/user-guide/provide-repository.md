---
sidebar_position: 2
---

# Provide a Repository

To start an auditing task, users should provide their repository along with all relevant information.

## Registry

When you log in to your account, you will be taken to the dashboard shown below to complete registration.

- The **Step 1 – Wallet Connection** enables you to allow our platform to access your wallet and link this wallet to your account for later logins.
- If the repository you want to audit is **private**, continue with **Step 2 – Connect to GitHub** and grant our application access to that specific repository.
- If the repository is **public**, you can skip Step 2 and go directly to **Step 3 – Create Task**.

![Access Grant](/img/registry.png)

## Essential Information

On the next page, fill in the essential task information, including the task title and description.

Notably, the task is saved automatically once this step is complete. You can leave at any time and come back to finish it.

![Create Task](/img/create_task.png)

After entering the repository link, users should select the branch and the smart contracts that are in scope. The below box displays the most recently saved commit messages. When the repository is updated, these messages can be compared to determine whether the branch should be reloaded.

![Select Files](/img/select_files.png)

## Auxiliary Context

Besides essential information, users are also encouraged to provide auxiliary context. This may include documentation, the chains where the app will be deployed, and any intentional administrative limits. This context will guide the registered audit agent and our arbiter in evaluating findings.

![Documentation](/img/documentation.png)

![Q&A 1](/img/Q&A_1.png)