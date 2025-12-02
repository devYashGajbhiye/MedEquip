

const products = [
   {
        id: 101,
        name: "Standard Adjustable Cane",
        price: "₹500 – ₹1,200",
        image: "../images/mobility/Adjustable-Cane.jpeg",
        category: "mobility"
    },
    {
        id: 102,
        name: "Quad Cane (Four-Legged Stick)",
        price: "₹800 – ₹1,800",
        image: "../images/mobility/Quad-Cane.jpeg",
        category: "mobility"
    },
    {
        id: 103,
        name: "Underarm Crutches (Pair)",
        price: "₹900 – ₹2,500",
        image: "../images/mobility/Underarm-Crutches.jpeg",
        category: "mobility"
    },
    {
        id: 104,
        name: "Forearm Crutches (Lofstrand)",
        price: "₹1,500 – ₹4,000",
        image: "../images/mobility/Forearm-Crutches.jpeg",
        category: "mobility"
    },

    {
        id: 105,
        name: "Standard Folding Walker",
        price: "₹1,800 – ₹3,500",
        image: "../images/mobility/Folding-Walker.jpeg",
        category: "mobility"
    },
    {
        id: 106,
        name: "Rollator (4-Wheeled Walker)",
        price: "₹4,500 – ₹12,000",
        image: "../images/images/mobility/Rollator.jpeg",
        category: "mobility"
    },
    {
        id: 107,
        name: "Knee Scooter",
        price: "₹9,000 – ₹15,000",
        image: "../images/mobility/Knee-Scooter.jpeg",
        category: "mobility"
    },

 
    {
        id: 108,
        name: "Standard Manual Wheelchair",
        price: "₹4,999",
        image: "../images/mobility/Manual-Wheelchair.jpeg",
        category: "mobility"
    },
    {
        id: 109,
        name: "Transport Wheelchair",
        price: "₹6,000 – ₹10,000",
        image: "../images/mobility/Transport-Wheelchair.jpeg",
        category: "mobility"
    },
    {
        id: 110,
        name: "Electric Mobility Scooter (Medical)",
        price: "₹60,000 – ₹1,65,000+",
        image: "../images/mobility/medical-mobility-scooter.jpg",
        category: "mobility"
    },

    {
        id: 111,
        name: "Commode Chair",
        price: "₹2,500 – ₹5,000",
        image: "../images/mobility/Commode-Chair.jpeg",
        category: "mobility"
    },
    {
        id: 112,
        name: "Shower Chair / Bath Bench",
        price: "₹2,000 – ₹4,500",
        image: "../images/mobility/shower-chair.jpg",
        category: "mobility"
    },
    {
        id: 113,
        name: "Transfer Bench",
        price: "₹4,500 – ₹9,000",
        image: "../images/mobility/transfer-bench.jpg",
        category: "mobility"
    },
    {
        id: 114,
        name: "Bed Assist Rail",
        price: "₹2,500 – ₹4,000",
        image: "../images/mobility/bed-assist-rail.jpeg",
        category: "mobility"
    },
    {
        id: 115,
        name: "Gait Belt (Transfer Belt)",
        price: "₹500 – ₹1,500",
        image: "../images/mobility/gate-belt.jpeg",
        category: "mobility"
    },
     {
        id: 201,
        name: "Scalpel Handle (BP Handle)",
        price: "₹150 – ₹500",
        image: "../images/surgical/scalpel-handle.jpeg",
        category: "surgical"
    },
    {
        id: 202,
        name: "Surgical Blade (Disposable)",
        price: "₹10 – ₹25 (per blade)",
        image: "../images/surgical/surgical-blade.jpeg",
        category: "surgical"
    },
    {
        id: 203,
        name: "Mayo Scissors",
        price: "₹300 – ₹1,200",
        image: "../images/surgical/mayo-scissors.jpeg",
        category: "surgical"
    },
    {
        id: 204,
        name: "Metzenbaum Scissors",
        price: "₹400 – ₹1,500",
        image: "../images/surgical/Metzenbaum-scissors.jpeg",
        category: "surgical"
    },
    {
        id: 205,
        name: "Artery Forceps (Hemostat)",
        price: "₹250 – ₹800",
        image: "../images/surgical/artery-forceps.jpeg",
        category: "surgical"
    },
    {
        id: 206,
        name: "Tissue Forceps (Adson)",
        price: "₹200 – ₹700",
        image: "../images/surgical/tissue-forceps.2jpeg.jpeg",
        category: "surgical"
    },
    {
        id: 207,
        name: "Allis Tissue Forceps",
        price: "₹350 – ₹1,100",
        image: "../images\surgical\tissue-forceps.2jpeg.jpeg",
        category: "surgical"
    },
    {
        id: 208,
        name: "Sponge Holding Forceps",
        price: "₹400 – ₹1,200",
        image: "../images/surgical/sponge-holding-forceps.jpeg",
        category: "surgical"
    },
    {
        id: 209,
        name: "Needle Holder (Driver)",
        price: "₹350 – ₹1,500",
        image: "../images/surgical/needle-holder.jpeg",
        category: "surgical"
    },
    {
        id: 210,
        name: "Dressing Scissors",
        price: "₹200 – ₹500",
        image: "../images/surgical/dressing-scissors.jpeg",
        category: "surgical"
    },
    {
        id: 221,
        name: "Senn Retractor",
        price: "₹400 – ₹1,000",
        image: "../images/surgical/senn-retractor.jpeg",
        category: "surgical"
    },
    {
        id: 212,
        name: "Weitlaner Retractor",
        price: "₹2,500 – ₹8,500",
        image: "../images/surgical/weitlaner-retractor.jpeg",
        category: "surgical"
    },
    {
        id: 213,
        name: "Yankauer Suction Tip",
        price: "₹80 – ₹300 (Reusable)",
        image: "../images/surgical/Yankauer-Tip.jpeg",
        category: "surgical"
    },
    {
        id: 214,
        name: "Kidney Tray (Instrument Tray)",
        price: "₹300 – ₹800",
        image: "../images/surgical/kidney-trey.jpeg",
        category: "surgical"
    },
    {
        id: 215,
        name: "Bipolar Forceps",
        price: "₹4,000 – ₹10,000+",
        image: "../images/surgical/bipolar-forceps.jpeg",
        category: "surgical"
    },
  {
    "id": 300,
    "name": "Digital Blood Pressure Monitor",
    "price": "₹1,200 – ₹3,500",
    "image": "../images/health_wellness/blood-pressure-monitor.jpeg",
    "category": "health_wellness"
  },
  {
    "id": 301,
    "name": "Fingertip Pulse Oximeter",
    "price": "₹700 – ₹2,500",
    "image": "../images/health_wellness/oximeter.jpeg",
    "category": "health_wellness"
  },
  {
    "id": 302,
    "name": "Digital Thermometer (Flexible Tip)",
    "price": "₹150 – ₹500",
    "image": "../images/health_wellness/digital-thermometer.jpeg",
    "category": "health_wellness"
  },
  {
    "id": 303,
    "name": "Glucometer (Blood Glucose Monitor)",
    "price": "₹600 – ₹1,500 (Starter Kit)",
    "image": "../images/health_wellness/glucometer.jpeg",
    "category": "health_wellness"
  },
  {
    "id": 304,
    "name": "Compressor Nebulizer Machine",
    "price": "₹1,200 – ₹4,000",
    "image": "../images/health_wellness/Nebulizer.jpeg",
    "category": "health_wellness"
  },
  {
    "id": 305,
    "name": "Electric Heating Pad",
    "price": "₹400 – ₹1,200",
    "image": "../images/health_wellness/Heating-Pad.jpeg",
    "category": "health_wellness"
  },
  {
    "id": 306,
    "name": "Steam Inhaler / Vaporizer",
    "price": "₹300 – ₹800",
    "image": "../images/health_wellness/Vaporizer.jpeg",
    "category": "health_wellness"
  },
  {
    "id": 307,
    "name": "TENS Pain Relief Machine",
    "price": "₹1,800 – ₹4,500",
    "image": "../images/health_wellness/pain-relief-machine.jpeg",
    "category": "health_wellness"
  },
  {
    "id": 308,
    "name": "Digital Body Weighing Scale",
    "price": "₹600 – ₹2,500",
    "image": "../images/health_wellness/digital-weighing-scale.jpeg",
    "category": "health_wellness"
  },
  {
    "id": 309,
    "name": "Rubber Hot Water Bag",
    "price": "₹150 – ₹400",
    "image": "../images/health_wellness/hot-water-bag.jpeg",
    "category": "health_wellness"
  },
  {
    "id": 310,
    "name": "Pill Box Organizer (7-Day)",
    "price": "₹100 – ₹300",
    "image": "../images/health_wellness/pill-box.jpeg/",
    "category": "health_wellness"
  },
  {
    "id": 311,
    "name": "Basic Home First Aid Kit",
    "price": "₹400 – ₹1,000",
    "image": "../images/health_wellness/first-aid-kit.jpeg",
    "category": "health_wellness"
  },
  {
    "id": 312,
    "name": "Cervical Collar / Neck Support",
    "price": "₹300 – ₹700",
    "image": "../images/health_wellness/cervical collar.jpeg",
    "category": "health_wellness"
  },
  {
    "id": 313,
    "name": "Knee Cap / Compression Support",
    "price": "₹250 – ₹600 (Per Pair)",
    "image": "../images/health_wellness/knee cap.jpeg",
    "category": "health_wellness"
  },
  {
    "id": 314,
    "name": "Air Humidifier (Cool Mist)",
    "price": "₹1,500 – ₹4,500",
    "image": "../images/health_wellness/Air-Humidifier.jpeg",
    "category": "health_wellness"
  },
  {
    "id": 400,
    "name": "Adult Diaper Pants (Pack of 10)",
    "price": "₹250 – ₹550",
    "image": "../images/personal_care/Adult-Diapers.jpeg",
    "category": "personal_care"
  },
  {
    "id": 401,
    "name": "Tape Style Adult Diapers (Pack of 10)",
    "price": "₹280 – ₹600",
    "image": "../images/personal_care/Tape-style-adult-diapers.jpeg",
    "category": "personal_care"
  },
  {
    "id": 402,
    "name": "Disposable Underpads (Pack of 10)",
    "price": "₹150 – ₹350",
    "image": "../images/personal_care/disposable-underpads.jpeg",
    "category": "personal_care"
  },
  {
    "id": 403,
    "name": "Bed Bath Wipes (Pack of 10)",
    "price": "₹40 – ₹120",
    "image": "../images/personal_care/bed-bath-wipes.jpeg",
    "category": "personal_care"
  },
  {
    "id": 404,
    "name": "Patient Cleansing Foam / Mousse",
    "price": "₹600 – ₹1,200",
    "image": "../images/personal_care/cleansing-foam.jpeg",
    "category": "personal_care"
  },
  {
    "id": 405,
    "name": "Moisturizing Skin Barrier Cream",
    "price": "₹350 – ₹700",
    "image": "../images/personal_care/barrier-cream.jpeg",
    "category": "personal_care"
  },
  {
    "id": 406,
    "name": "Hydrocolloid Dressing (Single Piece)",
    "price": "₹100 – ₹250",
    "image": "../images/personal_care/hydrocolloid-dressing.jpeg",
    "category": "personal_care"
  },
  {
    "id": 407,
    "name": "Sterile Non-Adherent Gauze Swabs (Box of 100)",
    "price": "₹400 – ₹600",
    "image": "../images/personal_care/gauze-swabs.jpeg",
    "category": "personal_care"
  },
  {
    "id": 408,
    "name": "Medical Paper Tape (Hypoallergenic)",
    "price": "₹100 – ₹250 (Per Roll)",
    "image": "../images/personal_care/paper-tape.jpeg",
    "category": "personal_care"
  },
  {
    "id": 409,
    "name": "Alcohol-Free Adhesive Remover Spray",
    "price": "₹700 – ₹1,000",
    "image": "../images/personal_care/adhesive-remover.jpeg",
    "category": "personal_care"
  },
  {
    "id": 410,
    "name": "Silicone Scar Treatment Gel",
    "price": "₹800 – ₹1,500",
    "image": "../images/personal_care/scar-gel.jpeg",
    "category": "personal_care"
  },
  {
    "id": 411,
    "name": "Disposable Examination Gloves (Box of 100)",
    "price": "₹300 – ₹500",
    "image": "../images/personal_care/exam-gloves.jpeg",
    "category": "personal_care"
  },
  {
    "id": 412,
    "name": "Urine Drainage Bag (Disposable)",
    "price": "₹50 – ₹150 (Per Bag)",
    "image": "../images/personal_care/urine-bag.jpeg",
    "category": "personal_care"
  },
  {
    "id": 413,
    "name": "Commode Liner Bags (Pack of 10)",
    "price": "₹200 – ₹450",
    "image": "../images/personal_care/commode-liners.jpeg",
    "category": "personal_care"
  },
  {
    "id": 414,
    "name": "Oral Swabs / Toothbrush Sticks (Pack of 50)",
    "price": "₹300 – ₹600",
    "image": "../images/personal_care/oral-swabs.jpeg",
    "category": "personal_care"
  },
  {
    "id": 500,
    "name": "Anti-Decubitus Air Mattress (Bubble Type)",
    "price": "₹3,500 – ₹8,000",
    "image": "../images/patient_care/Air-mattress.jpeg",
    "category": "patient_care"
  },
  {
    "id": 501,
    "name": "Semi-Fowler Hospital Bed (Manual)",
    "price": "₹15,000 – ₹25,000",
    "image": "../images/patient_care/hospital-bed.jpeg",
    "category": "patient_care"
  },
  {
    "id": 502,
    "name": "Over-Bed Table (Adjustable Height)",
    "price": "₹2,500 – ₹5,500",
    "image": "../images/patient_care/over-bed-table.jpeg",
    "category": "patient_care"
  },
  {
    "id": 503,
    "name": "Patient Positioning Wedge / Pillow",
    "price": "₹800 – ₹2,200",
    "image": "../images/patient_care/patient-positioning-wedge.jpeg",
    "category": "patient_care"
  },
  {
    "id": 504,
    "name": "Incentive Spirometer (3-Ball Type)",
    "price": "₹250 – ₹600",
    "image": "../images/patient_care/incentive-spirometer.jpeg",
    "category": "patient_care"
  },
  {
    "id": 505,
    "name": "Reusable Bed Pan (Plastic / Stainless Steel)",
    "price": "₹350 – ₹1,200",
    "image": "../images/patient_care/bed-pan.jpeg",
    "category": "patient_care"
  },
  {
    "id": 506,
    "name": "IV Pole / Drip Stand (Adjustable)",
    "price": "₹1,500 – ₹3,500",
    "image": "../images/patient_care/IV pole.jpeg",
    "category": "patient_care"
  },
  {
    "id": 507,
    "name": "Gel / Foam Wheelchair Cushion",
    "price": "₹1,200 – ₹3,500",
    "image": "../images/patient_care/foam-wheelchair-cushion.jpeg",
    "category": "patient_care"
  },
  {
    "id": 508,
    "name": "Feeding Tube (Ryle's Tube) (Consumable)",
    "price": "₹50 – ₹150 (Per Tube)",
    "image": "../images/patient_care/feeding-tube.jpeg",
    "category": "patient_care"
  },
  {
    "id": 509,
    "name": "Suction Catheters (Pack of 10)",
    "price": "₹100 – ₹250",
    "image": "../images/patient_care/suction-catheter.jpeg",
    "category": "patient_care"
  },
  {
    "id": 510,
    "name": "Foley Catheter (Disposable) (Single)",
    "price": "₹100 – ₹300",
    "image": "../images/patient_care/foley-catheter.jpeg",
    "category": "patient_care"
  },
  {
    "id": 511,
    "name": "Bedside Locker / Cabinet (Laminate)",
    "price": "₹3,000 – ₹6,000",
    "image": "../images/patient_care/bedside-locker.jpeg",
    "category": "patient_care"
  },
  {
    "id": 512,
    "name": "Patient ID Bands (Pack of 100)",
    "price": "₹400 – ₹800",
    "image": "../images/patient_care/patient-id-brands.jpeg",
    "category": "patient_care"
  },
  {
    "id": 513,
    "name": "Digital Weighing Scale (Sling/Hoist Type)",
    "price": "₹50,000 – ₹1,00,000+",
    "image": "../images/patient_care/weighing-scale.jpeg",
    "category": "patient_care"
  },
  {
    "id": 514,
    "name": "Bed Rail Pads / Protectors (Pair)",
    "price": "₹1,500 – ₹3,000",
    "image": "../images/patient_care/bed-rail-pads.jpeg",
    "category": "patient_care"
  },
  {
    "id": 600,
    "name": "Adjustable Knee Brace / Support",
    "price": "₹600 – ₹1,800",
    "image": "../images/support_products/knee-support.jpeg",
    "category": "support_products"
  },
  {
    "id": 601,
    "name": "Arm Sling (Pouch Type)",
    "price": "₹200 – ₹500",
    "image": "../images/support_products/arm-sling.jpeg",
    "category": "support_products"
  },
  {
    "id": 602,
    "name": "Lumbosacral Belt (Back Support)",
    "price": "₹700 – ₹1,500",
    "image": "../images/support_products/lumbosacral-belt.jpeg",
    "category": "support_products"
  },
  {
    "id": 603,
    "name": "Ankle Brace / Splint",
    "price": "₹500 – ₹1,200",
    "image": "../images/support_products/ankle-brace.jpeg",
    "category": "support_products"
  },
  {
    "id": 604,
    "name": "Cervical Collar (Soft / Firm)",
    "price": "₹300 – ₹700",
    "image": "../images/support_products/cervical-collar.jpeg",
    "category": "support_products"
  },
  {
    "id": 605,
    "name": "Wrist Splint (Carpal Tunnel)",
    "price": "₹400 – ₹900",
    "image": "../images/support_products/wrist-splint.jpeg",
    "category": "support_products"
  },
  {
    "id": 606,
    "name": "Elastic Compression Stockings (Pair)",
    "price": "₹800 – ₹2,500",
    "image": "../images/support_products/compression-stockings.jpeg",
    "category": "support_products"
  },
  {
    "id": 607,
    "name": "Abdominal Binder (Post-Surgical)",
    "price": "₹500 – ₹1,200",
    "image": "../images/support_products/abdominal-binder.jpeg",
    "category": "support_products"
  },
  {
    "id": 608,
    "name": "Clavicle Brace / Figure-8 Bandage",
    "price": "₹400 – ₹1,000",
    "image": "../images/support_products/clavicle-brace.jpeg",
    "category": "support_products"
  },
  {
    "id": 609,
    "name": "Taylor Brace (Spinal Support)",
    "price": "₹1,500 – ₹4,000",
    "image": "../images/support_products/taylor-brace.jpeg",
    "category": "support_products"
  },
  {
    "id": 610,
    "name": "Shoulder Immobilizer (Sling with Waist Strap)",
    "price": "₹600 – ₹1,500",
    "image": "../images/support_products/shoulder-immobilizer.jpeg",
    "category": "support_products"
  },
  {
    "id": 611,
    "name": "Heel / Foot Cushion Protector (Pair)",
    "price": "₹400 – ₹900",
    "image": "../images/support_products/heel-cushion-protector.jpeg",
    "category": "support_products"
  },
  {
    "id": 612,
    "name": "Contoured LS Support (Extra Firm)",
    "price": "₹800 – ₹1,800",
    "image": "../images/support_products/LS-support.webp",
    "category": "support_products"
  },
  {
    "id": 613,
    "name": "Inflatable Air Splint (Set)",
    "price": "₹2,000 – ₹5,000",
    "image": "../images/support_products/air-splint.jpeg",
    "category": "support_products"
  },
  {
    "id": 614,
    "name": "Rib Belt / Chest Binder (Unisex)",
    "price": "₹400 – ₹900",
    "image": "../images/support_products/rib-belt.jpeg",
    "category": "support_products"
  },
  {
    "id": 700,
    "name": "One-Piece Colostomy Pouch (Closed) - Box of 10",
    "price": "₹1,000 – ₹2,000",
    "image": "../images/ostomy-care/colostomy-pouch.jpeg",
    "category": "ostomy_care"
  },
  {
    "id": 701,
    "name": "One-Piece Ileostomy Pouch (Drainable) - Box of 10",
    "price": "₹1,500 – ₹3,500",
    "image": "../images/ostomy-care/ileostomy-pouch.jpeg",
    "category": "ostomy_care"
  },
  {
    "id": 702,
    "name": "Two-Piece System Base Plate (Standard Wear) - Box of 5",
    "price": "₹1,800 – ₹3,500",
    "image": "../images/ostomy-care/System-base-plate.jpeg",
    "category": "ostomy_care"
  },
  {
    "id": 703,
    "name": "Two-Piece System Urostomy Pouch (Tap Outlet) - Box of 10",
    "price": "₹2,500 – ₹4,500",
    "image": "../images/ostomy-care/Urostomy-pouch.jpeg",
    "category": "ostomy_care"
  },
  {
    "id": 704,
    "name": "Ostomy Barrier Paste (60g Tube)",
    "price": "₹600 – ₹950",
    "image": "../images/ostomy-care/barrier-paste.jpeg",
    "category": "ostomy_care"
  },
  {
    "id": 705,
    "name": "Ostomy Protective Powder (25g Bottle)",
    "price": "₹350 – ₹650",
    "image": "../images/ostomy-care/Protective-powder.jpeg",
    "category": "ostomy_care"
  },
  {
    "id": 706,
    "name": "Adhesive Remover Spray (Sting-Free) - 50ml",
    "price": "₹850 – ₹1,800",
    "image": "../images/ostomy-care/Remover-spray.jpeg",
    "category": "ostomy_care"
  },
  {
    "id": 707,
    "name": "Skin Barrier Rings / Seals (Box of 10)",
    "price": "₹900 – ₹1,600",
    "image": "../images/ostomy-care/skin-barrier-rings.jpeg",
    "category": "ostomy_care"
  },
  {
    "id": 708,
    "name": "Adjustable Ostomy Support Belt",
    "price": "₹400 – ₹700",
    "image": "../images/ostomy-care/support-belt.jpeg",
    "category": "ostomy_care"
  },
  {
    "id": 709,
    "name": "Pouch Deodorant / Lubricant (Bottle)",
    "price": "₹800 – ₹1,200",
    "image": "../images/ostomy-care/pouch-deodorant.jpeg",
    "category": "ostomy_care"
  }
  
]