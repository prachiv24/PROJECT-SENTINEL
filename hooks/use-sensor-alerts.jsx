'use client'

import { useEffect, useRef, useState } from 'react'
import { ref, onValue, off, update } from 'firebase/database'
import { rtdb } from '@/lib/firebase'
import { toast } from 'sonner'

const DEVICE_ID = 'esp32-car-01'

// 🧠 TypeScript 'type SensorAlert' block has been completely deleted!

export async function updateSensorAlertAction(pushId, action) {
  // 🧠 Removed strict type string definitions from parameters
  const alertRef = ref(rtdb, `alerts/intrusion/${DEVICE_ID}/${pushId}`)
  await update(alertRef, { action_taken: action })
}

export function useSensorAlerts() {
  const [sensorAlerts, setSensorAlerts] = useState([]) // 👈 Stripped generic <SensorAlert[]>
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null) // 👈 Stripped generic <string | null>
  const knownIds = useRef(new Set())
  const isFirstLoad = useRef(true)

  useEffect(() => {
    const alertsRef = ref(rtdb, `alerts/intrusion/${DEVICE_ID}`)

    const unsubscribe = onValue(
      alertsRef,
      (snapshot) => {
        if (!snapshot.exists()) {
          setSensorAlerts([])
          setLoading(false)
          isFirstLoad.current = false
          return
        }

        const data = snapshot.val()
        const alerts = []

        // 🧠 Cleaned up the typed Object.entries loop assignment
        Object.entries(data).forEach(([pushId, alert]) => {
          const riskType = alert.risk_type ?? ''
          const riskLevel = riskType === 'suspicious activity' ? 'CRITICAL' : 'HIGH'

          alerts.push({
            id: pushId,
            deviceId: DEVICE_ID,
            riskLevel,
            risk_type: riskType,
            timestamp: alert.timestamp ? new Date(alert.timestamp) : new Date(),
            action_taken: alert.action_taken ?? null,
          })

          // Toast only for new alerts after first load
          if (!isFirstLoad.current && !knownIds.current.has(pushId)) {
            toast.warning(
              riskLevel === 'CRITICAL'
                ? `🚨 Critical alert: ${riskType}`
                : `⚠️ High alert: ${riskType}`,
              { duration: 5000 }
            )
          }

          knownIds.current.add(pushId)
        })

        alerts.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
        setSensorAlerts(alerts)
        setLoading(false)
        isFirstLoad.current = false
      },
      (err) => {
        console.error('RTDB error:', err)
        setError(err.message)
        setLoading(false)
      }
    )

    return () => off(alertsRef)
  }, [])

  return { sensorAlerts, loading, refreshing: false, error, refresh: () => {} }
}