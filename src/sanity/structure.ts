import type { StructureResolver } from "sanity/structure";
import { feedbackStatuses } from "./feedbackOptions";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("photos").title("Portfolio photos"),
      S.divider(),
      // Feedback from the site's feedback button, grouped as a task list
      S.listItem()
        .title("Feedback")
        .child(
          S.list()
            .title("Feedback")
            .items([
              ...feedbackStatuses.map((status) =>
                S.listItem()
                  .title(status)
                  .child(
                    S.documentList()
                      .title(status)
                      .apiVersion("2024-12-27")
                      .filter('_type == "feedback" && status == $status')
                      .params({ status })
                      .defaultOrdering([{ field: "submittedAt", direction: "desc" }])
                  )
              ),
              S.divider(),
              S.documentTypeListItem("feedback").title("All feedback"),
            ])
        ),
    ]);
