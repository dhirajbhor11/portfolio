/*
=========================================================
* dhiraj bhor portfolio 1
=========================================================

* Product Page: https://www.dhiraj.com
* Copyright 2023 dhiraj bhor

Coded by dhirajbhor11

 =========================================================

* .
*/

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Typography page components
import TypographyRoboto from "layouts/sections/elements/typography/components/TypographyRoboto";

// Typography page components code
import typographyRobotoCode from "layouts/sections/elements/typography/components/TypographyRoboto/code";

function Typography() {
  return (
    <BaseLayout
      title="Typography"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/Typography" },
        { label: "Typography" },
      ]}
    >
      <View title="Typography - Font Family Roboto" code={typographyRobotoCode}>
        <TypographyRoboto />
      </View>
    </BaseLayout>
  );
}

export default Typography;
