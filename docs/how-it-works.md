# How Lotus Growth Works

Lotus Growth treats growth as an operating loop, not a posting script.

## 1. Context

The agent starts from three pieces of context:

- project positioning
- current weekly growth goal
- account and channel constraints

This keeps the plan tied to a real business goal instead of generating generic content.

## 2. Planning

The planner turns active accounts into small daily actions:

- research tasks for finding high-signal conversations
- draft tasks for preparing useful posts or replies
- follow-up tasks for checking responses

The default implementation is intentionally simple so you can replace it with your own logic.

## 3. Drafting

Drafts should be specific, useful, and reviewable. The starter CLI generates a basic structure that you can customize:

- observation
- useful note
- practical move
- question or call to action

## 4. Review

Public actions should go through a human review step. The project is designed for safe growth operations, not unattended spam.

## 5. Memory

Private deployments can add runtime memory, but keep it out of git. Use memory to track:

- what worked
- what got ignored
- what triggered replies
- which channels need warmup
- what should be avoided next time
