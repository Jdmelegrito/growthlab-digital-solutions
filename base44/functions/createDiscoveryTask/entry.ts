import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { name, email, notes } = await req.json();

    const { accessToken } = await base44.asServiceRole.connectors.getConnection("googletasks");

    // Get the default task list (@default)
    const listsRes = await fetch("https://tasks.googleapis.com/tasks/v1/users/@me/lists", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const listsData = await listsRes.json();
    const taskListId = listsData.items?.[0]?.id || "@default";

    // Due date: tomorrow
    const due = new Date();
    due.setDate(due.getDate() + 1);
    due.setHours(9, 0, 0, 0);

    const task = {
      title: `Follow up: Discovery Call — ${name || "New Visitor"}`,
      notes: `Email: ${email || "N/A"}\n${notes ? "Notes: " + notes : "Booked via GrowthLab website"}`,
      due: due.toISOString(),
    };

    const taskRes = await fetch(`https://tasks.googleapis.com/tasks/v1/lists/${encodeURIComponent(taskListId)}/tasks`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const taskData = await taskRes.json();

    if (!taskRes.ok) {
      return Response.json({ error: taskData.error?.message || "Failed to create task" }, { status: 500 });
    }

    return Response.json({ success: true, task: taskData });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});