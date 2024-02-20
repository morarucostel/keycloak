import { lazy } from "react";
import type { Path } from "react-router-dom";
import { generateEncodedPath } from "../../utils/generateEncodedPath";
import type { AppRouteObject } from "../../routes";

export type SessionsParams = { realm: string };

const SessionsSection = lazy(() => import("../SessionsSection"));

export const NewEntryRoute: AppRouteObject = {
  path: "/:realm/newentry",
  element: <SessionsSection />,
  breadcrumb: (t) => t("titleNewEntry"),
  handle: {
    access: ["view-realm", "view-clients", "view-users"],
  },
};

export const toSessions = (params: SessionsParams): Partial<Path> => ({
  pathname: generateEncodedPath(NewEntryRoute.path, params),
});
