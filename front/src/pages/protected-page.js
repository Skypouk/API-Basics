import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { postUser } from "../services/message.service";
import { UserForm } from "../components/user-form";

export const ProtectedPage = () => {
  const [message, setMessage] = useState("");

  const { getAccessTokenSilently } = useAuth0();

  const handleFormSubmit = async (formData) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await postUser(accessToken, formData);

    if (data) {
      setMessage(JSON.stringify(data, null, 2));
    }

    if (error) {
      setMessage(JSON.stringify(error, null, 2));
    }
  };

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Protected Page
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              This page retrieves a{" "}
              <strong>protected message when adding a user</strong> from an
              external API.
            </span>
            <span>
              <strong>Only authenticated users can access this page.</strong>
            </span>
          </p>
          <UserForm onSubmit={handleFormSubmit} />
          <CodeSnippet title="Protected Message" code={message} />
        </div>
      </div>
    </PageLayout>
  );
};
