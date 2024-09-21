import React from "react";

const CustomizedMugs = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-6">
          <p className="font-bold italic text-3xl">Customized Mugs</p>
        </div>
        <div className="text-base italic sm:text-lg md:text-xl text-justify px-5 md:px-20">
          <p className="mb-4">
            Start your day with a sip of personalization! Our{" "}
            <strong>customized mugs</strong> service allows you to design a mug
            that truly reflects the recipient’s personality or captures the
            sentiment of a special occasion. Whether it’s a fun, quirky design
            or a sleek, professional one, our high-quality mugs are perfect for
            gifting and everyday use.
          </p>
          <p className="mb-4 pt-8">
            Here’s what makes our customized mugs stand out:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>High-Quality Material:</strong> We use durable,
              long-lasting ceramic that can withstand daily use and repeated
              washing. Our mugs are also microwave and dishwasher safe, ensuring
              convenience along with style.
            </li>
            <li>
              <strong>Endless Customization Options:</strong> From names,
              initials, and special messages to photos, logos, or even inside
              jokes, we offer endless possibilities for customization. You can
              choose from a variety of colors, fonts, and design elements to
              create a mug that feels one-of-a-kind.
            </li>
            <li>
              <strong>Perfect for Every Occasion:</strong> Whether you’re
              celebrating a birthday, anniversary, graduation, or holiday, our
              customized mugs make for an ideal gift that’s both personal and
              practical. They are also great for corporate gifting or as
              memorabilia for special events.
            </li>
            <li>
              <strong>Couple’s Collection:</strong> Our ‘His & Hers’ mugs are
              perfect for couples, offering matching designs that celebrate love
              and togetherness. Ideal for engagement gifts, wedding presents, or
              just because, these mugs add a personalized touch to any morning
              routine.
            </li>
          </ul>
          <p className="mb-4">
            With our customized mugs, you’re not just giving a gift—you’re
            creating a memorable experience that starts with every sip.
          </p>
          <p className="mb-16">
            At Miso, we believe that every product should tell a story, and with
            our personalized services, you can ensure that your gift is a
            reflection of the thought and care you’ve put into it. Explore our
            range of customizable services and discover the perfect way to make
            your moments unforgettable.
          </p>
        </div>
      </div>
    </>
  );
};

export default CustomizedMugs;
