import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Grid, Header } from "semantic-ui-react";

const SemanticUIColumns = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column>
      <Header
        as="h2"
        textAlign="center"
        image="/assets/logo_square.svg"
        content="Sign in to your account"
        style={{ marginBottom: "32px" }}
      />
      <Form size="large">
        <Form.Input
          fluid
          icon="mail"
          iconPosition="left"
          placeholder="E-mail address"
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          type="password"
        />
        <Button
          type="submit"
          color="purple"
          fluid
          size="large"
          style={{ marginBottom: "32px" }}
        >
          Sign in
        </Button>
      </Form>
      <p>
        Not a member? <Link to="/register">Sign up now</Link>
      </p>
    </Grid.Column>
  </Grid>
);

export default SemanticUIColumns;
