import type { AccessType } from "@keycloak/keycloak-admin-client/lib/defs/whoAmIRepresentation";
import type { TFunction } from "i18next";
import type { ComponentType } from "react";
import type { NonIndexRouteObject, RouteObject } from "react-router-dom";

import { App } from "./App";
import { PageNotFoundSection } from "./PageNotFoundSection";
import authenticationRoutes from "./authentication/routes";
import clientScopesRoutes from "./client-scopes/routes";
import clientRoutes from "./clients/routes";
import dashboardRoutes from "./dashboard/routes";
import eventRoutes from "./events/routes";
import groupsRoutes from "./groups/routes";
import identityProviders from "./identity-providers/routes";
import realmRoleRoutes from "./realm-roles/routes";
import realmSettingRoutes from "./realm-settings/routes";
import realmRoutes from "./realm/routes";
import sessionRoutes from "./sessions/routes";
import newEntryRoutes from "./newentry/routes";
import userFederationRoutes from "./user-federation/routes";
import userRoutes from "./user/routes";
import pageRoutes from "./page/routes";

export type AppRouteObjectHandle = {
  access: AccessType | AccessType[];
};

export interface AppRouteObject extends NonIndexRouteObject {
  path: string;
  breadcrumb?: (t: TFunction) => string | ComponentType<any>;
  handle: AppRouteObjectHandle;
}

export const NotFoundRoute: AppRouteObject = {
  path: "*",
  element: <PageNotFoundSection />,
  handle: {
    access: "anyone",
  },
};

export const routes: AppRouteObject[] = [
  ...authenticationRoutes,
  ...clientRoutes,
  ...clientScopesRoutes,
  ...eventRoutes,
  ...identityProviders,
  ...realmRoleRoutes,
  ...realmRoutes,
  ...realmSettingRoutes,
  ...sessionRoutes,
  ...newEntryRoutes,
  ...userFederationRoutes,
  ...userRoutes,
  ...groupsRoutes,
  ...dashboardRoutes,
  ...pageRoutes,
  NotFoundRoute,
];

export const RootRoute: RouteObject = {
  path: "/",
  element: <App />,
  children: routes,
};
