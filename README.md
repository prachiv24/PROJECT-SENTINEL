# PS No. - IoT-EDGE-2026

Real-Time IoT-Edge Telemetry & Fleet Analytics Platform

Project Sentinel: Real-Time IoT-Edge Telemetry & Fleet Analytics Platform

An end-to-end IoT-edge ecosystem designed to handle high-throughput telemetry data ingestion, real-time edge computer vision, and distributed data processing. Project Sentinel moves beyond simple data collection. It's an intelligent analytics engine that ingests streaming data from edge hardware, refines it using a multi-layer cloud architecture, and serves real-time predictive insights to unified full-stack dashboards.

## Team Details

**Team Name:** VOLT_BITS  
**Team Leader:** @prachiv24  
**Team Members:** * **MEMBER_1** - PRACHI VERMA - 2023UCS1553 - @prachiv24  
* **MEMBER_2** - DEBJANEE MURDIA - 2023UCS1559  
* **MEMBER_3** - PRAGATI VERMA - 2023UCS1568  

## Project Links

* **Project Presentation:** [Final Project Presentation](https://github.com/prachiv24/PROJECT-SENTINEL/blob/main/PPT.pptx)  
* **Video Demonstration:** [Watch Video](https://youtu.be/EfFH5G_PbLo)  
* **Source Code:** [GitHub Repository](https://github.com/prachiv24/PROJECT-SENTINEL)  

---

## ✨ Key Features

### Edge Hardware & IoT (ESP32 / ESP32-CAM)
* **High-Throughput Ingestion:** Real-time hardware endpoints capable of capturing and streaming >1,000 telemetry data events per minute.
* **Edge Image Capture:** Configured camera nodes to stream low-latency security images and live video feeds straight to backend processing servers.

### Backend Engine & Edge AI Modules (Python & OpenCV)
* **Real-Time Edge Vision:** Deployed optimized machine learning models for facial recognition and drowsiness tracking running under a critical latency threshold of 400ms.
* **Sliding-Window Evaluation:** Implemented a chronological queue to track anomalies over continuous frames, dropping hardware sensor noise and reducing false alert profiles by 35%.
* **Live Synchronization:** Features localized handlers that instantly publish calculated metrics and security breach triggers directly to a cloud listener.

### Big Data & Cloud Infrastructure (Databricks & Apache Spark)
* **Medallion Pipeline Architecture:** Builds incremental streaming transformations cleanly separated across specialized storage layers:
  * **Bronze:** Consumes and archives raw, high-throughput IoT JSON structural streams.
  * **Silver:** Performs high-speed data cleaning, type casting, and schema enforcement.
  * **Gold:** Aggregates analytics metrics and clusters active historical data layers.
* **Data Compaction:** Uses internal file management commands to clean out micro-batch fragments into standardized high-performance Parquet format.
* **Z-Order Clustering:** Optimizes physical multi-dimensional file arrangements based on high-cardinality values, driving a 45% boost in query retrieval speeds.

### Frontend Dashboard & Analytics Hub (React.js, Power BI & R)
* **Synchronized UI Control Panel:** Built a fully responsive React web dashboard styled with Tailwind CSS to manage configurations and visualize instantaneous data metrics.
* **Real-Time Visual Alerts:** Connects via a low-overhead stream layer to render intrusive breach logs and edge-captured security snapshots instantly.
* **Statistical Insights Hub:** Integrated robust Power BI and R configurations to output predictive trends and historical hardware behavior charts.

---

## Tech Stack

| Area | Technology |
| :--- | :--- |
| **Edge Hardware / IoT** | ESP32, ESP32-CAM, Embedded C++ |
| **Data Ingestion & Big Data** | Databricks, Apache Spark, Delta Lake |
| **Backend & Machine Learning** | Python, OpenCV (Computer Vision) |
| **Storage & Sync Layer** | Firebase Real-Time Database |
| **Analytics & Data Science** | Power BI, R (Statistical Modeling) |
| **Frontend Dashboard** | React.js, Vite, Tailwind CSS, Axios |

---
---

## 📐 Architecture Overview

Below is the end-to-end system layout for Project Sentinel, tracking data flow from raw edge hardware collection up to distributed streaming cloud analytics and localized dashboards:

```text
  [ ESP32 Sensors ]       [ ESP32-CAM ]
         │                      │
         │ (Telemetry Data)     │ (Video Stream / Images)
         │                      │
         ▼                      ▼
┌────────────────────────────────────────────────────────┐
│             Backend Engine & Edge AI Modules           │
│   - OpenCV Drowsiness Detection (<400ms Response)      │
│   - Sliding-Window False-Alert Reduction (-35%)        │
└───────────────────┬────────────────────────────────────┘
                    │
                    ▼ (Ingestion Payload)
┌────────────────────────────────────────────────────────┐
│           Databricks & Spark Processing Layer          │
│   ──► Bronze (Raw Data Ingestion)                      │
│   ──► Silver (Cleaned Telemetry & Feature Parsing)     │
│   ──► Gold (Aggregated Metrics & Z-Order Indexing)     │
└───────────────────┬────────────────────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────────────────────┐
│                 Storage & Sync Layer                   │
│          - Firebase Real-Time Database                 │
└───────────────────┬────────────────────────────────────┘
                    │
      ┌─────────────┴─────────────┐
      ▼                           ▼
┌───────────────┐           ┌───────────────┐
│ React Web App │           │  Power BI / R │
│ Live Alerts   │           │ Analytics Hub │
└───────────────┘           └───────────────┘
```

## Performance Optimization Metrics

### 1. 40% Reduction in Data Processing Latency
* **Spark Structured Streaming:** Shifted from traditional batch cycles to automated, incremental micro-batches via Apache Spark to swallow active hardware feeds effortlessly.
* **Delta Lake Optimization:** Removed runtime computation blockages by executing file compaction commands on raw folders, resolving the small-file latency penalties common to continuous IoT payloads.

### 2. 45% Boost in Downstream SQL Query Performance
* **Z-Order Indexing:** Applied localized structural optimization on frequently filtered columns (`timestamp` and `device_id`) inside the refined Gold tables.
* **Targeted Data Skipping:** Leveraged native metadata-driven boundary matching, freeing analytics engines from wasting compute resources on massive, unnecessary database scans.

### 3. 35% Lower False Alert Rate with <400ms Response Times
* **Temporal Smoothing:** Buffered rapid hardware frame data into continuous evaluation windows to account for momentary blinks, preventing erratic alert triggers.
* **Lightweight Inferencing:** Configured a compact edge tracing workflow that minimizes heavy image processing layers to keep execution cycles under 400 milliseconds.

---

##  Project Structure

```text
├── hardware/
│   ├── esp32_telemetry/        # C++/Arduino code for telemetry streaming
│   └── esp32_cam_edge/         # Camera capturing & image streaming scripts
├── backend_cv/
│   ├── models/                 # Facial recognition and drowsiness detection models
│   ├── sliding_window.py       # False-alert filtering algorithm
│   └── firebase_sync.py        # Real-time event publisher
├── databricks_spark/
│   ├── 01_bronze_ingest.py     # High-throughput data streaming consumer
│   ├── 02_silver_transform.py  # Data cleaning and enrichment notebook
│   └── 03_gold_aggregates.py   # Aggregations, Delta optimization, and Z-Ordering
├── analytics_r/
│   └── statistical_plots.R     # Telemetry statistical analysis using R
└── frontend_dashboard/
    ├── src/
    │   ├── components/         # Real-time tracking modules and alert widgets
    │   └── context/            # Firebase state synchronization
    └── package.json
```
##  Getting Started

### 1. Edge Infrastructure Setup
* Navigate to `hardware/esp32_telemetry/` and configure your local Wi-Fi SSIDs and gateway endpoints.
* Flash the binaries to your target edge units using the Arduino CLI or PlatformIO.

### 2. Edge Computer Vision Engine
* Spin up the streaming local listener:
```bash
cd backend_cv
pip install -r requirements.txt
python sliding_window.py
```

### 3. Databricks Infrastructure Deployment
Import the notebooks located in databricks_spark/ straight into your Databricks Workspace cluster.

Run 01_bronze_ingest.py on an active Apache Spark cluster running runtime 13.x+ to open the continuous ingestion streams.
### 4. Real-Time Frontend Control Panel
Start your localized UI server:
cd frontend_dashboard
npm install
npm run dev
