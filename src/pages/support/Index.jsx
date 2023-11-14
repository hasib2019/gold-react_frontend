import React from "react";
import "@/assets/style.css";
import Button from "../../components/ui/Button";
import Textinput from "../../components/ui/Textinput";
import Textarea from "../../components/ui/Textarea";

const Index = () => {
  return (
    <div className="terms">
      <div className="grid">
        <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1">
          <Textinput
            label="Name"
            type="text"
            placeholder="Full Name"
            // onChange={(e) => handleChagne(e, "title")}
            // defaultValue={value.title}
          />
          <Textinput
            label="Email"
            type="text"
            placeholder="Write Email"
            // onChange={(e) => handleChagne(e, "title")}
            // defaultValue={value.title}
          />
          <Textarea
            label="Description"
            type="text"
            placeholder="write description"
            // onChange={(e) => handleChagne(e, "description")}
            // defaultValue={value.description}
          />
        </div>
        <div className="space-y-4 mt-2">
          <Button
            text="Submit"
            className="btn-success"
            // onClick={(e) => onSubmit()}
            // isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
