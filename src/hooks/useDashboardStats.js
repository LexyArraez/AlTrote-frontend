import { useMemo } from 'react'

export const useDashboardStats = (children = [], tasks = []) => {
   return useMemo(() => {
    const childrenStats = children.map((child) => {
      const childTasks = tasks.filter((t) => t.assigned_to_id === child.id)
      const completed = childTasks.filter((t) => t.status === 'completada').length
      const pending = childTasks.length - completed
      const completion = childTasks.length
        ? Math.round((completed / childTasks.length) * 100)
        : 0

      return { ...child, pendingTasks: pending, completion }
    })

    const overallCompletion = childrenStats.length
      ? Math.round(
          childrenStats.reduce((sum, c) => sum + c.completion, 0) / childrenStats.length
        )
      : 0

    return { childrenStats, overallCompletion }
  }, [children, tasks])
}
