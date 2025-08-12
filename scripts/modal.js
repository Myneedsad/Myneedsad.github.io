const projectDetails = {
  project1: {
    title: "โครงสร้าง HTML",
    description: `
    <div style="text-align:center; margin-bottom: 10px;">
      <img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2010/03/HTML-Understanding-Featured.jpg?q=70&fit=contain&w=1200"
           alt="ตัวอย่างโครงสร้าง HTML"
           style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.2);">
    </div>

    <strong>ภาพรวม:</strong><br>
    ส่วนนี้ครอบคลุมพื้นฐานของ HTML ซึ่งเป็นภาษามาร์กอัปมาตรฐานสำหรับการสร้างเว็บเพจ<br><br>

    <strong>ประเด็นสำคัญที่เรียนรู้:</strong><br>
    • เข้าใจโครงสร้างของเอกสาร HTML<br>
    • เรียนรู้เกี่ยวกับแท็ก (Tags), อิลิเมนต์ (Elements) และแอตทริบิวต์ (Attributes)<br>
    • ทำความรู้จักกับอิลิเมนต์ HTML ที่ใช้บ่อย เช่น หัวข้อ ย่อหน้า ลิงก์ และรูปภาพ<br>
  `,
    challenges: `
    ในช่วงแรกมีความยากลำบากในการเข้าใจโครงสร้างของเอกสารทั้งหมด
    รวมถึงการใช้งานแท็กต่าง ๆ อย่างถูกต้อง
  `,
    solutions: `
    ฝ่าฟันความยากลำบากด้วยการเรียนรู้ผ่านบทเรียนทีละขั้นตอน
    ฝึกทำโปรเจกต์เล็ก ๆ และอ้างอิงแหล่งข้อมูลที่เชื่อถือได้ เช่น MDN Web Docs
  `,
    technologies: ["HTML", "เว็บเบราว์เซอร์", "โปรแกรมแก้ไขข้อความ"],
  },

  project2: {
    title: "โปรแกรมแก้ไข HTML (HTML Editors)",
    description: `
    <div style="text-align:center; margin-bottom: 10px;">
      <img src="https://cdn.pixabay.com/photo/2017/06/23/10/48/code-2434271_1280.jpg" 
           alt="โปรแกรมแก้ไข HTML - VSCode" 
           style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.2);">
    </div>

    <strong>ภาพรวม:</strong><br>
    ข้อมูลเกี่ยวกับโปรแกรมแก้ไข HTML พร้อมตัวอย่างและเคล็ดลับในการใช้งาน<br><br>

    <strong>ประเด็นสำคัญ:</strong><br>
    • ตัวอย่างโปรแกรมแก้ไข: VSCode, Sublime Text, Atom<br>
    • วิธีเขียน HTML อย่างมีประสิทธิภาพ<br>
  `,
    challenges: `
    การเลือกโปรแกรมแก้ไข HTML ที่เหมาะสมสำหรับผู้เริ่มต้น
  `,
    solutions: `
    ทดลองใช้งานโปรแกรมแก้ไขหลายตัวและเลือกใช้ตัวที่รู้สึกใช้งานง่ายที่สุด
  `,
    technologies: ["HTML", "CSS", "JavaScript", "VSCode"],
  },

  project3: {
    title: "แอตทริบิวต์ใน HTML (HTML Attributes)",
    description: `
    <div style="text-align:center; margin-bottom: 10px;">
      <img src="https://www.researchgate.net/profile/Francesco-Bruschi/publication/346063971/figure/fig1/AS:976736139685888@1607025105064/Example-of-HTML-attribute-tree.png" 
           alt="ตัวอย่างแอตทริบิวต์ใน HTML" 
           style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.2);">
    </div>

    <strong>ภาพรวม:</strong><br>
    แอตทริบิวต์ใน HTML ให้ข้อมูลเพิ่มเติมเกี่ยวกับอิลิเมนต์ HTML โดยมักจะใส่ในแท็กเปิดในรูปแบบชื่อและค่า เช่น <code>name="value"</code><br><br>

    <strong>ประเด็นสำคัญ:</strong><br>
    • แอตทริบิวต์กำหนดคุณสมบัติต่าง ๆ เช่น ลิงก์, ข้อความสำรอง, รหัสประจำ, คลาส, รูปแบบ และอื่น ๆ<br>
    • ควบคุมพฤติกรรมหรือรูปลักษณ์ของอิลิเมนต์<br>
    • ตัวอย่างแอตทริบิวต์ที่ใช้บ่อย ได้แก่ <code>href</code>, <code>src</code>, <code>alt</code>, <code>id</code>, <code>class</code>, และ <code>style</code><br>
  `,
    challenges: `
    การเข้าใจว่าการใช้แอตทริบิวต์ต่าง ๆ ส่งผลอย่างไรต่ออิลิเมนต์ในแต่ละกรณีในช่วงแรกค่อนข้างยาก
  `,
    solutions: `
    ฝึกฝนด้วยการสร้างหน้าเว็บตัวอย่าง และอ้างอิงข้อมูลจากเอกสาร MDN Web Docs
  `,
    technologies: ["HTML", "เว็บเบราว์เซอร์", "โปรแกรมแก้ไขข้อความ"],
  },

  project4: {
    title: "ฟอร์มใน HTML (HTML Form)",
    description: `
    <div style="text-align:center; margin-bottom: 10px;">
      <img src="https://media.discordapp.net/attachments/937338065272311849/1403659079112724490/zQRkj.png?ex=68985ae3&is=68970963&hm=fc5ebea4841c422e99ba3a6b30aed6fef4916369b948f26e167cb45460e730a7&=&format=webp&quality=lossless" 
           alt="ตัวอย่างฟอร์มใน HTML" 
           style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.2);">
    </div>

    <strong>ภาพรวม:</strong><br>
    ฟอร์มใน HTML ใช้สำหรับเก็บข้อมูลที่ผู้ใช้กรอกและส่งข้อมูลไปยังเซิร์ฟเวอร์เพื่อประมวลผล<br><br>

    <strong>คุณสมบัติหลัก:</strong><br>
    • ใช้แท็ก <code>&lt;form&gt;</code> เพื่อสร้างฟอร์ม<br>
    • อิลิเมนต์ในฟอร์ม เช่น <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code>, และ <code>&lt;button&gt;</code><br>
    • แอตทริบิวต์อย่าง <code>action</code> และ <code>method</code> กำหนดวิธีและที่อยู่สำหรับส่งข้อมูลฟอร์ม<br>
    • ประเภทข้อมูลที่ใช้บ่อย เช่น ข้อความ, อีเมล, รหัสผ่าน, ช่องติ๊กถูก, ปุ่มเลือก และปุ่มส่งข้อมูล<br>
  `,
    challenges: `
    ในช่วงแรกการทำความเข้าใจวิธีจัดการข้อมูลฟอร์มและการตรวจสอบความถูกต้องของข้อมูลค่อนข้างยาก
  `,
    solutions: `
    ฝึกสร้างฟอร์มหลายรูปแบบ และใช้บทเรียนรวมถึงเครื่องมือต่าง ๆ เช่น ChatGPT เพื่อช่วยแก้ข้อสงสัย
  `,
    technologies: ["HTML", "เว็บเบราว์เซอร์", "โปรแกรมแก้ไขข้อความ"],
  },

  project5: {
    title: "CSS Selector",
    description: `
    <div style="text-align:center; margin-bottom: 10px;">
      <img src="https://web.dev/static/learn/html/semantic-html/image/the-text-nodes-have-desc-9cd0a6c89d981.png" 
           alt="ตัวอย่างฟอร์มใน HTML" 
           style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.2);">
    </div>

    <strong>ภาพรวม:</strong><br>
    Semantic HTML คือการใช้แท็ก HTML ที่มีความหมายเฉพาะเจาะจงเพื่อบอกโครงสร้างและเนื้อหาของเว็บเพจอย่างชัดเจน<br><br>

    <strong>คุณสมบัติหลัก:</strong><br>
    • ใช้แท็กเช่น <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, และ <code>&lt;footer&gt;</code> เพื่อแบ่งส่วนต่าง ๆ ของเว็บ<br>
    • ช่วยให้เครื่องมือค้นหาและเทคโนโลยีช่วยเหลือเข้าใจโครงสร้างเว็บได้ดีขึ้น<br>
    • ส่งผลให้ SEO ดีขึ้นและเพิ่มการเข้าถึงสำหรับผู้ใช้ที่ใช้ screen reader<br>
    • ลดการใช้แท็ก <code>&lt;div&gt;</code> และ <code>&lt;span&gt;</code> ที่ไม่มีความหมายเฉพาะเจาะจง<br>
  `,
    challenges: `
    การเปลี่ยนแปลงวิธีคิดจากการใช้แท็กทั่วไปเป็นแท็กที่มีความหมาย ทำให้ต้องเรียนรู้โครงสร้างและหน้าที่ของแท็กแต่ละชนิดใหม่
  `,
    solutions: `
    ฝึกใช้งาน Semantic Tag ในโปรเจกต์เล็ก ๆ ทดลองแยกส่วนเว็บด้วยแท็กที่เหมาะสม และศึกษาตัวอย่างเว็บที่ใช้ Semantic HTML อย่างถูกต้อง
  `,
    technologies: ["HTML5", "เว็บเบราว์เซอร์", "เครื่องมือพัฒนาเว็บ"],
  },

  project6: {
    title: "CSS Selector",
    description: `
    <div style="text-align:center; margin-bottom: 10px;">
      <img src="https://studyopedia.com/wp-content/uploads/2017/07/CSS-Selectors.png" 
           alt="ตัวอย่างโครงสร้าง DOM เพื่อใช้กับ CSS Selector" 
           style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.2);">
    </div>

    <strong>ภาพรวม:</strong><br>
    CSS Selector คือรูปแบบหรือวิธีการที่ใช้เลือกองค์ประกอบ (elements) บนหน้าเว็บเพื่อกำหนดสไตล์โดยใช้ CSS<br><br>

    <strong>คุณสมบัติหลัก:</strong><br>
    • มีหลายรูปแบบ เช่น ตัวเลือกโดยแท็ก (tag), คลาส (class), ไอดี (id), แอตทริบิวต์ (attribute)<br>
    • เลือกองค์ประกอบตามโครงสร้าง เช่น ตัวเลือกลูก (child), หลาน (descendant), พี่น้อง (sibling)<br>
    • สามารถใช้ pseudo-classes และ pseudo-elements เพื่อเลือกองค์ประกอบในสถานะหรือส่วนเฉพาะ<br>
    • ช่วยให้การจัดการสไตล์มีความยืดหยุ่นและแม่นยำมากขึ้น<br>
  `,
    challenges: `
    การจดจำรูปแบบและลำดับความสำคัญของ selector รวมถึงการเข้าใจว่า selector แบบไหนเลือกอะไรได้บ้างในโครงสร้าง DOM
  `,
    solutions: `
    ฝึกเขียน CSS ด้วย selector ต่าง ๆ ทดลองดูผลลัพธ์บนเบราว์เซอร์ และใช้เครื่องมือ developer tools ช่วยตรวจสอบการเลือกองค์ประกอบ
  `,
    technologies: ["CSS", "HTML", "เว็บเบราว์เซอร์", "เครื่องมือพัฒนาเว็บ"],
  },

  project7: {
    title: "CSS Background Color",
    description: `
    <div style="text-align:center; margin-bottom: 10px;">
      <img src="https://global.discourse-cdn.com/freecodecamp/original/3X/e/4/e4395b7491b84115b0fcb8fdd5078836aca60081.png" 
           alt="ตัวอย่างสีพื้นหลัง CSS" 
           style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.2);">
    </div>

    <strong>ภาพรวม:</strong><br>
    CSS Background Color คือคุณสมบัติที่ใช้กำหนดสีพื้นหลังขององค์ประกอบ HTML เพื่อเพิ่มความสวยงามและความชัดเจนในการจัดวางเนื้อหา<br><br>

    <strong>คุณสมบัติหลัก:</strong><br>
    • ใช้คุณสมบัติ <code>background-color</code> เพื่อกำหนดสีพื้นหลัง<br>
    • สามารถใช้สีในรูปแบบต่าง ๆ เช่น ชื่อสี (e.g., red), รหัส HEX (e.g., #ff0000), RGB, RGBA, HSL<br>
    • รองรับการตั้งค่าสีโปร่งใสด้วยค่า alpha ใน RGBA หรือ HSLA<br>
    • สามารถกำหนดสีพื้นหลังให้กับแท็กต่าง ๆ ได้ เช่น <code>div</code>, <code>body</code>, <code>header</code> เป็นต้น<br>
  `,
    challenges: `
    การเลือกสีที่เหมาะสมกับดีไซน์ และการทำให้สีพื้นหลังไม่ส่งผลเสียต่อการอ่านเนื้อหา (contrast) รวมถึงการใช้สีโปร่งใสให้ถูกต้อง
  `,
    solutions: `
    ใช้เครื่องมือช่วยเลือกสี เช่น color picker, ตรวจสอบ accessibility contrast และทดสอบสีบนอุปกรณ์และเบราว์เซอร์ต่าง ๆ
  `,
    technologies: ["CSS", "HTML", "เว็บเบราว์เซอร์", "เครื่องมือพัฒนาเว็บ"],
  },

  project8: {
    title: "CSS Box Model",
    description: `
    <div style="text-align:center; margin-bottom: 10px;">
      <img src="https://img.uxcel.com/cdn-cgi/image/format=auto/practices/box-model-properties-1621317728519/a-1664876725290-2x.jpg" 
           alt="ตัวอย่าง CSS Box Model" 
           style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.2);">
    </div>

    <strong>ภาพรวม:</strong><br>
    CSS Box Model คือแนวคิดพื้นฐานของการจัดวางองค์ประกอบในหน้าเว็บ โดยทุกองค์ประกอบจะถูกมองว่าเป็นกล่อง (Box) 
    ซึ่งประกอบไปด้วย 4 ชั้นหลัก ได้แก่ <em>Content</em>, <em>Padding</em>, <em>Border</em> และ <em>Margin</em> 
    เพื่อใช้ในการกำหนดขนาด ระยะห่าง และการจัดวางในเลย์เอาต์<br><br>

    <strong>องค์ประกอบหลักของ Box Model:</strong><br>
    • <code>Content</code> – เนื้อหาของกล่อง เช่น ข้อความหรือรูปภาพ<br>
    • <code>Padding</code> – ระยะห่างระหว่างเนื้อหาและเส้นขอบ (โปร่งใส)<br>
    • <code>Border</code> – เส้นขอบรอบกล่อง สามารถกำหนดสี ความหนา และรูปแบบได้<br>
    • <code>Margin</code> – ระยะห่างระหว่างกล่องนี้กับกล่องอื่น (โปร่งใส)<br>
  `,
    challenges: `
    การคำนวณขนาดกล่องเมื่อมีการเพิ่ม Padding และ Border 
    รวมถึงการจัดการ Margin เพื่อไม่ให้เลย์เอาต์เพี้ยนหรือเกิดปัญหา Margin Collapse
  `,
    solutions: `
    ใช้คุณสมบัติ <code>box-sizing: border-box;</code> เพื่อให้การกำหนดขนาดรวม Padding และ Border
    และทดสอบการจัดวางในหลายหน้าจอเพื่อตรวจสอบว่าไม่มีการซ้อนทับหรือระยะห่างเกินความจำเป็น
  `,
    technologies: ["CSS", "HTML", "เว็บเบราว์เซอร์", "เครื่องมือพัฒนาเว็บ"],
  },

  project9: {
    title: "CSS vertical-align",
    description: `
    <div style="text-align:center; margin-bottom: 10px;">
      <img src="https://s1.o7planning.com/web-rs/web-image/en/arf-1156544-vi.webp" 
           alt="ตัวอย่าง CSS vertical-align" 
           style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.2);">
           <img src="https://www.twistedbrackets.com/content/images/size/w1200/2025/01/css-align-center.png" 
           alt="ตัวอย่าง CSS vertical-align" 
           style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.2);">
    </div>

    <strong>ภาพรวม:</strong><br>
    CSS <code>vertical-align</code> เป็นคุณสมบัติที่ใช้กำหนดตำแหน่งการจัดเรียงในแนวตั้งขององค์ประกอบ 
    โดยมักใช้กับ <em>inline elements</em> หรือ <em>inline-block elements</em> 
    เช่น ข้อความและรูปภาพภายในบรรทัดเดียวกัน เพื่อให้วางตำแหน่งให้ตรงกับความต้องการ<br><br>

    <strong>ค่าที่ใช้บ่อย:</strong><br>
    • <code>baseline</code> – จัดให้อยู่ที่เส้นฐานของบรรทัด (ค่าเริ่มต้น)<br>
    • <code>top</code> – จัดให้อยู่ด้านบนสุดของบรรทัด<br>
    • <code>middle</code> – จัดให้อยู่ตรงกลางของบรรทัด<br>
    • <code>bottom</code> – จัดให้อยู่ด้านล่างสุดของบรรทัด<br>
    • ค่าแบบตัวเลขหรือเปอร์เซ็นต์ เช่น <code>10px</code>, <code>50%</code> เพื่อเลื่อนตำแหน่งจากเส้นฐาน<br>
  `,
    challenges: `
    ผู้เริ่มต้นมักเข้าใจผิดว่า vertical-align ใช้ได้กับการจัดตำแหน่งบล็อกทั้งกล่อง 
    แต่จริง ๆ แล้วใช้ได้กับองค์ประกอบในบรรทัด (inline/inline-block) หรือในตาราง
  `,
    solutions: `
    ใช้ <code>display: inline-block;</code> คู่กับ <code>vertical-align</code> สำหรับองค์ประกอบที่ต้องการจัดในแนวตั้ง
    และหากต้องการจัดตำแหน่งบล็อกทั้งกล่อง ให้ใช้ Flexbox หรือ CSS Grid แทน
  `,
    technologies: ["CSS", "HTML", "เว็บเบราว์เซอร์", "เครื่องมือพัฒนาเว็บ"],
  },


  project10: {
    title: "CSS TEXT",
description: `
<div style="text-align:center; margin-bottom: 10px;">
  <img src="https://www.tutorialbrain.com/wp-content/uploads/2019/05/Text-cheat-sheet-CSS.png" 
       alt="ตัวอย่าง CSS vertical-align" 
       style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.2);">
  <img src="https://www.coding-dude.com/wp/wp-content/uploads/2020/06/highlight-text-css.jpg" 
       alt="ตัวอย่าง CSS text alignment" 
       style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.2);">
</div>

<strong>ภาพรวม:</strong><br>
คุณสมบัติ <code>CSS Text</code> ใช้สำหรับกำหนดและจัดการการแสดงผลข้อความในหน้าเว็บ เช่น การจัดตำแหน่ง (alignment), การจัดในแนวตั้ง (vertical-align), การเว้นระยะระหว่างตัวอักษร (letter-spacing), หรือการตกแต่งข้อความ (text-decoration) 
เพื่อให้เนื้อหาดูสวยงามและอ่านง่ายขึ้น<br><br>

<strong>คุณสมบัติที่ใช้บ่อย:</strong><br>
• <code>text-align</code> – จัดตำแหน่งข้อความในแนวนอน (left, right, center, justify)<br>
• <code>vertical-align</code> – จัดตำแหน่งองค์ประกอบในแนวตั้ง (ใช้กับ inline/inline-block)<br>
• <code>text-decoration</code> – เพิ่มเส้นขีดเส้นใต้, เส้นกลาง, หรือเอาออก<br>
• <code>letter-spacing</code> – ปรับระยะห่างระหว่างตัวอักษร<br>
• <code>line-height</code> – ปรับความสูงบรรทัดเพื่อความอ่านง่าย<br>
`,

challenges: `
ผู้เริ่มต้นมักสับสนระหว่างการจัดข้อความในแนวตั้งด้วย <code>vertical-align</code> 
กับการจัดตำแหน่งกล่องทั้งบล็อก ซึ่งจริง ๆ แล้ว <code>vertical-align</code> 
ใช้กับองค์ประกอบในบรรทัดหรือในตารางเท่านั้น ไม่ได้ใช้จัดตำแหน่งบล็อกทั้งกล่อง
`,

solutions: `
ทำความเข้าใจความแตกต่างระหว่าง <code>text-align</code>, <code>vertical-align</code> 
และการจัดตำแหน่งบล็อกด้วย Flexbox หรือ CSS Grid  
ใช้ <code>display: inline-block;</code> คู่กับ <code>vertical-align</code> 
เมื่อจัดในแนวตั้ง และเลือกเทคนิคอื่นเช่น Flexbox หรือ Grid 
หากต้องการจัดตำแหน่งทั้งกล่อง
`,

technologies: ["CSS", "HTML", "เว็บเบราว์เซอร์", "เครื่องมือพัฒนาเว็บ"],

  }


};

const ProjectElement = {
  modal: document.querySelector(".modal"),
  modalContent: document.querySelector(".modal-content"),
  cards: document.querySelectorAll(".card"),
};

function openProjectModal(element) {
  const projectId = element?.getAttribute("data-project") ?? "project1";
  const project = projectDetails[projectId];

  if (!project) return;

  let techHtml = "";
  project.technologies.forEach((tech) => {
    techHtml += `<span class="tech-tag">${tech}</span>`;
  });

  ProjectElement.modalContent.innerHTML = `
        <h2>• ${project.title}</h2>
        <br/>
        <div class="project-detail-content">
            <h3>Project details</h3>
            <p>${project.description}</p>
            <br/>
            <h3>Challenges</h3>
            <p>${project.challenges}</p>
            <br/>
            <h3>Solutions</h3>
            <p>${project.solutions}</p>
            <br/>
            <h3>Technologies</h3>
            <div class="project-tech">
                ${techHtml}
            </div>
        </div>
    `;
  ProjectElement.modal.classList.remove("hide");
}

window.addEventListener("DOMContentLoaded", main);

function main() {
  ProjectElement.cards.forEach((element) => {
    const cardContent = element.querySelector(".card-content");

    element.addEventListener("click", () => openProjectModal(cardContent));
  });

  window.addEventListener("click", (e) => {
    if (e.target === ProjectElement.modal) {
      ProjectElement.modal.classList.add("hide");
    }
  });
}
