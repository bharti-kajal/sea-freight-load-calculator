
STEP 1- +-----------------------------------+
| 📦 Add Item Form                  |
|  Length: [___]  Width: [___]      |
|  Height: [___] Weight: [___]      |
|  Quantity: [___]                  |
|  [ Add Item ]  [ Submit ]         |
+-----------------------------------+

STEP 2- 
STEP2 - 
+-----------------------------------+
| 🚢 Suggested Container            |
|  Type: 20ft Standard              |
|  Total CBM: 1.08 m³               |
|  Total Weight: 18 kg             |
|  [ Proceed to Optimize Layout ]  |
+-----------------------------------+


STEP 3 - 
+-----------------------------------+
| 📐 Optimization Layout            |
|  Used Containers: 1               |
|  Utilization: 85%                 |
|                                   |
|  [🧱 Layout Grid / Schematic ]    |
|  Item 1 - ✅ Placed               |
|  Item 2 - ❌ Not Fit              |
+-----------------------------------+

STEP 4- 

+-----------------------------------+
| 📐 User registration            |
|   name: [___]  email: [___]      |
|  password: [___] confirm_password: [___]            |
+-----------------------------------+

### **STEP 5 - 📂 Save / Load Shipments**

+----------------------------------------------+
| 📂 Save / Load Previous Shipments            |
|                                              |
| 🔖 Saved Shipments:                          |
|  [🔄 Last Load - 2025-05-21] [ Load ] [ ❌ ] |
|  [📦 Order #123 - Red Boxes]    [ Load ] [ ❌ ] |
|                                              |
| 💾 Save Current Shipment                     |
|  Title: [______________________]             |
|  [ Save Shipment ]                           |
+----------------------------------------------+

### **STEP 6 - 📊 Visualization (3D or Grid)**
+--------------------------------------------------+
| 📊 Shipment Visualization                        |
|                                                  |
|  [🔲 Grid View]  [🧊 3D View]  [⬆ Refresh]        |
|                                                  |
|  🧱 Container: 20ft Standard                      |
|  🟦 Item 1: Placed (Blue Box)                     |
|  🟥 Item 2: Not Fit                               |
|                                                  |
|  📌 Legend: 🟦 Placed  🟥 Not Fit  ▓ Occupied     |
+--------------------------------------------------+


### **STEP 7 - 📄 Export as PDF**

+--------------------------------------------+
| 📄 Export Loading Plan                     |
|                                            |
|  📋 Summary:                               |
|   • Container Type: 20ft Standard          |
|   • Total CBM: 1.08 m³                     |
|   • Total Weight: 18 kg                    |
|   • Utilization: 85%                       |
|                                            |
|  🧱 Include Layout Grid: [✓]               |
|  🧊 Include 3D Snapshot: [✓]               |
|                                            |
|  [ Download PDF ]                          |
+--------------------------------------------+

Step 1 ▸ Step 2 ▸ Step 3 ▸ Step 4 ▸ Step 5 ▸ Step 6 ▸ Step 7
[ Add Items ] ▸ [ Suggest Container ] ▸ [ Optimize ] ▸ [ Register ]
▸ [ Save/Load ] ▸ [ Visualize ] ▸ [ Export PDF ]

// Apis - Save Current Shipment Details 
Title 
Items Count 
l*w*h
total_cbm
container


{
  "containerType": "20ft Standard",
  "containerDimensions": { "length": 5, "width": 2, "height": 2.2 },
  "items": [
    { "id": "Item 1", "status": "placed", "position": [0, 0, 0], "color": "blue" },
    { "id": "Item 2", "status": "not_fit", "color": "red" }
  ]
}
