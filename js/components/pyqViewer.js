/* =========================================================
   AyurMedica - PYQ Viewer
   Professional Year → Subject → Chapter → Questions
   ========================================================= */

window.PYQViewer = (() => {

    let state = {
        containerId: null,
        activeYear: "All",
        activeSubject: "All",
        activeChapter: "All",
        activeMarks: "all",
        searchQuery: ""
    };

    /* -----------------------------------------------------
       Get PYQ data safely
       ----------------------------------------------------- */
    function getData() {
        return Array.isArray(window.BAMS_PYQS)
            ? window.BAMS_PYQS
            : [];
    }

    /* -----------------------------------------------------
       Escape HTML
       ----------------------------------------------------- */
    function escapeHTML(value) {
        if (value === null || value === undefined) return "";

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    /* -----------------------------------------------------
       Normalize text
       ----------------------------------------------------- */
    function normalize(value) {
        return String(value || "")
            .toLowerCase()
            .trim();
    }

    /* -----------------------------------------------------
       Get Professional Years
       ----------------------------------------------------- */
    function getYears(data) {
        return [
            "All",
            ...new Set(
                data
                    .map(q => q.professionalYear || q.year)
                    .filter(Boolean)
            )
        ];
    }

    /* -----------------------------------------------------
       Get Subjects according to selected year
       ----------------------------------------------------- */
    function getSubjects(data) {

        let filtered = data;

        if (state.activeYear !== "All" &&
            state.activeYear !== "All Years") {

            filtered = data.filter(q =>
                (q.professionalYear || q.year) === state.activeYear
            );
        }

        return [
            "All",
            ...new Set(
                filtered
                    .map(q => q.subject)
                    .filter(Boolean)
            )
        ];
    }

    /* -----------------------------------------------------
       Get Chapters according to selected year + subject
       ----------------------------------------------------- */
    function getChapters(data) {

        let filtered = data;

        if (state.activeYear !== "All" &&
            state.activeYear !== "All Years") {

            filtered = filtered.filter(q =>
                (q.professionalYear || q.year) === state.activeYear
            );
        }

        if (state.activeSubject !== "All") {

            filtered = filtered.filter(q =>
                q.subject === state.activeSubject
            );
        }

        return [
            "All",
            ...new Set(
                filtered
                    .map(q => q.chapter || q.module || q.topic)
                    .filter(Boolean)
            )
        ];
    }

    /* -----------------------------------------------------
       Filter Questions
       ----------------------------------------------------- */
    function getFilteredQuestions(data) {

        return data.filter(q => {

            const year =
                q.professionalYear || q.year || "";

            const chapter =
                q.chapter || q.module || q.topic || "";

            const questionText =
                q.question || "";

            const answerText =
                typeof q.modelAnswer === "string"
                    ? q.modelAnswer
                    : JSON.stringify(q.modelAnswer || "");

            /* Year */
            if (
                state.activeYear !== "All" &&
                state.activeYear !== "All Years" &&
                year !== state.activeYear
            ) {
                return false;
            }

            /* Subject */
            if (
                state.activeSubject !== "All" &&
                q.subject !== state.activeSubject
            ) {
                return false;
            }

            /* Chapter */
            if (
                state.activeChapter !== "All" &&
                chapter !== state.activeChapter
            ) {
                return false;
            }

            /* Marks */
            if (
                state.activeMarks !== "all" &&
                String(q.marks) !== String(state.activeMarks)
            ) {
                return false;
            }

            /* Search */
            if (state.searchQuery) {

                const searchArea = normalize(
                    `${questionText}
                     ${answerText}
                     ${q.subject || ""}
                     ${chapter}
                     ${q.topic || ""}
                     ${q.university || ""}
                     ${q.examSession || ""}`
                );

                if (
                    !searchArea.includes(
                        normalize(state.searchQuery)
                    )
                ) {
                    return false;
                }
            }

            return true;
        });
    }

    /* -----------------------------------------------------
       Dropdown
       ----------------------------------------------------- */
    function createSelect(id, label, options, selected) {

        return `
            <div class="pyq-filter-group">

                <label for="${id}">
                    ${escapeHTML(label)}
                </label>

                <select id="${id}" class="pyq-filter-select">

                    ${options.map(option => `
                        <option
                            value="${escapeHTML(option)}"
                            ${option === selected ? "selected" : ""}
                        >
                            ${escapeHTML(option)}
                        </option>
                    `).join("")}

                </select>

            </div>
        `;
    }

    /* -----------------------------------------------------
       Filter Bar
       ----------------------------------------------------- */
    function renderFilters(data) {

        const years = getYears(data);
        const subjects = getSubjects(data);
        const chapters = getChapters(data);

        return `

            <div class="pyq-filter-panel">

                <div class="pyq-filter-row">

                    ${createSelect(
                        "pyq-year-filter",
                        "Professional Year",
                        years,
                        state.activeYear
                    )}

                    ${createSelect(
                        "pyq-subject-filter",
                        "Subject",
                        subjects,
                        state.activeSubject
                    )}

                    ${createSelect(
                        "pyq-chapter-filter",
                        "Chapter",
                        chapters,
                        state.activeChapter
                    )}

                </div>


                <div class="pyq-search-row">

                    <div class="pyq-search-box">

                        <span class="pyq-search-icon">🔎</span>

                        <input
                            type="text"
                            id="pyq-search"
                            placeholder="Search questions, topics, subjects..."
                            value="${escapeHTML(state.searchQuery)}"
                        />

                    </div>


                    <div class="pyq-marks-buttons">

                        <button
                            class="pyq-mark-btn ${state.activeMarks === "all" ? "active" : ""}"
                            data-marks="all">
                            All
                        </button>

                        <button
                            class="pyq-mark-btn ${state.activeMarks === "10" ? "active" : ""}"
                            data-marks="10">
                            10 Marks
                        </button>

                        <button
                            class="pyq-mark-btn ${state.activeMarks === "5" ? "active" : ""}"
                            data-marks="5">
                            5 Marks
                        </button>

                        <button
                            class="pyq-mark-btn ${state.activeMarks === "2" ? "active" : ""}"
                            data-marks="2">
                            2 Marks
                        </button>

                    </div>

                </div>

            </div>
        `;
    }

    /* -----------------------------------------------------
       Answer formatting
       ----------------------------------------------------- */
    function formatAnswer(answer) {

    if (!answer) {
        return `<p>Answer not available.</p>`;
    }

    function renderValue(value) {

        if (value === null || value === undefined) {
            return "";
        }

        /* Array */
        if (Array.isArray(value)) {

            return `
                <ul class="pyq-answer-list">
                    ${value.map(item => `
                        <li>
                            ${renderValue(item)}
                        </li>
                    `).join("")}
                </ul>
            `;
        }

        /* Object */
        if (typeof value === "object") {

            return `
                <div class="pyq-answer-object">

                    ${Object.entries(value)
                        .map(([key, val]) => `
                            <div class="pyq-answer-object-row">

                                <strong>
                                    ${escapeHTML(
                                        key
                                            .replace(
                                                /([A-Z])/g,
                                                " $1"
                                            )
                                            .replace(
                                                /^./,
                                                s => s.toUpperCase()
                                            )
                                    )}
                                </strong>

                                <div>
                                    ${renderValue(val)}
                                </div>

                            </div>
                        `)
                        .join("")}

                </div>
            `;
        }

        /* String / number */
        return escapeHTML(String(value))
            .replace(/\n/g, "<br>");
    }


    /* Main answer object */
    if (typeof answer === "object") {

        return Object.entries(answer)
            .filter(([key]) =>
                key !== "examTips" &&
                key !== "tips"
            )
            .map(([key, value]) => {

                const title =
                    key
                        .replace(
                            /([A-Z])/g,
                            " $1"
                        )
                        .replace(
                            /^./,
                            s => s.toUpperCase()
                        );

                return `

                    <div class="pyq-answer-section">

                        <h4>
                            ${escapeHTML(title)}
                        </h4>

                        <div class="pyq-answer-content">

                            ${renderValue(value)}

                        </div>

                    </div>

                `;

            })
            .join("");
    }


    return renderValue(answer);


        /* Normal string */
        return escapeHTML(answer)
            .replace(/\n/g, "<br>");
    }

    /* -----------------------------------------------------
       Get exam tips
       ----------------------------------------------------- */
    function getExamTips(question) {

        if (question.examTips) {
            return question.examTips;
        }

        if (
            question.modelAnswer &&
            typeof question.modelAnswer === "object" &&
            question.modelAnswer.examTips
        ) {
            return question.modelAnswer.examTips;
        }

        return "";
    }

    /* -----------------------------------------------------
       Question Card
       ----------------------------------------------------- */
    function renderQuestion(question, index) {

        const marks = question.marks || "";

        const chapter =
            question.chapter ||
            question.module ||
            question.topic ||
            "";

        const answerHTML =
            formatAnswer(question.modelAnswer);

        const tips =
            getExamTips(question);

        return `

            <article
                class="pyq-card"
                data-question-id="${escapeHTML(question.id || index)}"
            >

                <div class="pyq-card-header">

                    <div class="pyq-card-meta">

                        <span class="pyq-marks-badge">
                            ${escapeHTML(marks)} Marks
                        </span>

                        ${question.paper ? `
                            <span class="pyq-type-badge" style="background:#e8f5e9;color:#1b4332;font-weight:700;">
                                📄 ${escapeHTML(question.paper)}
                            </span>
                        ` : ''}

                        ${question.section ? `
                            <span class="pyq-type-badge" style="background:#fef3c7;color:#92400e;font-weight:600;">
                                📑 ${escapeHTML(question.section)}
                            </span>
                        ` : ''}

                        ${
                            question.type
                                ? `
                                    <span class="pyq-type-badge">
                                        ${escapeHTML(question.type)}
                                    </span>
                                  `
                                : ""
                        }

                    </div>


                    <button
                        class="pyq-copy-btn"
                        data-copy-id="${escapeHTML(question.id || index)}"
                        title="Copy answer"
                    >
                        📋 Copy Answer
                    </button>

                </div>


                <div class="pyq-card-info">

                    <span>
                        📚 ${escapeHTML(question.subject || "Subject")}
                    </span>

                    <span>
                        📖 ${escapeHTML(chapter)}
                    </span>

                    ${
                        question.university
                            ? `
                                <span>
                                    🏛️ ${escapeHTML(question.university)}
                                </span>
                              `
                            : ""
                    }

                    ${
                        question.examSession
                            ? `
                                <span>
                                    📅 ${escapeHTML(question.examSession)}
                                </span>
                              `
                            : ""
                    }

                </div>


                <h3 class="pyq-question">

                    ${question.qNumber ? `Q${escapeHTML(question.qNumber)}.` : `Q${index + 1}.`}
                    ${escapeHTML(question.question)}

                </h3>


                <div class="pyq-answer">

                    <div class="pyq-answer-title">
                        Model Answer
                    </div>

                    ${answerHTML}

                </div>


                ${
                    tips
                        ? `
                            <div class="pyq-exam-tip">

                                <strong>
                                    ✨ Exam Tip
                                </strong>

                                <span>
                                    ${escapeHTML(tips)}
                                </span>

                            </div>
                          `
                        : ""
                }

            </article>
        `;
    }

    /* -----------------------------------------------------
       Empty State
       ----------------------------------------------------- */
    function renderEmpty() {

        return `

            <div class="pyq-empty-state">

                <div class="pyq-empty-icon">
                    📚
                </div>

                <h3>
                    No PYQs found
                </h3>

                <p>
                    Try another professional year,
                    subject, chapter, marks filter,
                    or search term.
                </p>

                <button
                    class="pyq-reset-btn"
                    id="pyq-reset"
                >
                    Reset Filters
                </button>

            </div>

        `;
    }

    /* -----------------------------------------------------
       Folder Tree
       ----------------------------------------------------- */
    function renderFolderTree(data) {

        const years = getYears(data).filter(
            year => year !== "All"
        );

        let html = `
            <div class="pyq-folder-tree">

                <div class="pyq-folder-title">
                    📁 PYQ Library
                </div>
        `;

        years.forEach(year => {

            const yearQuestions = data.filter(q =>
                (q.professionalYear || q.year) === year
            );

            const subjects = [
                ...new Set(
                    yearQuestions
                        .map(q => q.subject)
                        .filter(Boolean)
                )
            ];

            html += `

                <div class="pyq-folder-year">

                    <button
                        class="pyq-folder-btn"
                        data-year-folder="${escapeHTML(year)}"
                    >
                        <span>📂</span>
                        <span>${escapeHTML(year)}</span>
                        <span class="pyq-folder-arrow">›</span>
                    </button>

                    <div
                        class="pyq-folder-children"
                        data-year-content="${escapeHTML(year)}"
                        style="display:none;"
                    >
            `;

            subjects.forEach(subject => {

                const subjectQuestions =
                    yearQuestions.filter(
                        q => q.subject === subject
                    );

                const chapters = [
                    ...new Set(
                        subjectQuestions
                            .map(q =>
                                q.chapter ||
                                q.module ||
                                q.topic
                            )
                            .filter(Boolean)
                    )
                ];

                html += `

                    <div class="pyq-folder-subject">

                        <button
                            class="pyq-subject-folder-btn"
                            data-subject-folder="${escapeHTML(subject)}"
                            data-parent-year="${escapeHTML(year)}"
                        >
                            <span>📚</span>
                            <span>${escapeHTML(subject)}</span>
                            <span>›</span>
                        </button>

                        <div
                            class="pyq-folder-chapters"
                            data-subject-content="${escapeHTML(subject)}"
                            style="display:none;"
                        >
                `;

                chapters.forEach(chapter => {

                    const count =
                        subjectQuestions.filter(q =>
                            (q.chapter ||
                             q.module ||
                             q.topic) === chapter
                        ).length;

                    html += `

                        <button
                            class="pyq-chapter-folder-btn"
                            data-chapter-folder="${escapeHTML(chapter)}"
                            data-parent-year="${escapeHTML(year)}"
                            data-parent-subject="${escapeHTML(subject)}"
                        >

                            <span>📄</span>

                            <span>
                                ${escapeHTML(chapter)}
                            </span>

                            <small>
                                ${count}
                            </small>

                        </button>
                    `;
                });

                html += `
                        </div>
                    </div>
                `;
            });

            html += `
                    </div>
                </div>
            `;
        });

        html += `
            </div>
        `;

        return html;
    }

    /* -----------------------------------------------------
       Question List
       ----------------------------------------------------- */
    function renderQuestionList(data) {

        const questions =
            getFilteredQuestions(data);

        let html = `

            <div class="pyq-results-header">

                <div>
                    <strong>
                        ${questions.length}
                    </strong>
                    question${questions.length !== 1 ? "s" : ""}
                    found
                </div>

            </div>
        `;

        if (!questions.length) {
            return html + renderEmpty();
        }

        html += `
            <div class="pyq-question-list">
        `;

        questions.forEach((question, index) => {

            html += renderQuestion(
                question,
                index
            );

        });

        html += `
            </div>
        `;

        return html;
    }

    /* -----------------------------------------------------
       Main Render
       ----------------------------------------------------- */
    function render(containerId, activeYear = "All", searchQuery = "") {

        const container =
            document.getElementById(containerId);

        if (!container) {
            console.error(
                `PYQViewer: Container "${containerId}" not found.`
            );
            return;
        }

        state.containerId = containerId;

        state.activeYear =
            activeYear || state.activeYear || "All";

        state.searchQuery =
            searchQuery !== undefined
                ? searchQuery
                : state.searchQuery;

        const data = getData();

        container.innerHTML = `

            <div class="pyq-viewer">

                ${renderFolderTree(data)}

                <div class="pyq-main-content">

                    <div class="pyq-page-heading">

                        <div>

                            <h2>
                                Previous Year Questions
                            </h2>

                            <p>
                                Browse BAMS PYQs
                                professional-year wise,
                                subject wise and
                                chapter wise.
                            </p>

                        </div>

                    </div>

                    ${renderFilters(data)}

                    <div id="pyq-results">

                        ${renderQuestionList(data)}

                    </div>

                </div>

            </div>
        `;

        attachEvents();
    }

    /* -----------------------------------------------------
       Refresh Results
       ----------------------------------------------------- */
    function refresh() {

        const container =
            document.getElementById(state.containerId);

        if (!container) return;

        const data = getData();

        const results =
            container.querySelector("#pyq-results");

        if (results) {
            results.innerHTML =
                renderQuestionList(data);
        }

        updateDropdowns(data);
        attachResultEvents();
    }

    /* -----------------------------------------------------
       Update Dropdowns
       ----------------------------------------------------- */
    function updateDropdowns(data) {

        const subjectSelect =
            document.getElementById(
                "pyq-subject-filter"
            );

        const chapterSelect =
            document.getElementById(
                "pyq-chapter-filter"
            );

        if (!subjectSelect || !chapterSelect) {
            return;
        }

        const subjects =
            getSubjects(data);

        const chapters =
            getChapters(data);

        subjectSelect.innerHTML =
            subjects.map(subject => `
                <option
                    value="${escapeHTML(subject)}"
                    ${subject === state.activeSubject ? "selected" : ""}
                >
                    ${escapeHTML(subject)}
                </option>
            `).join("");

        chapterSelect.innerHTML =
            chapters.map(chapter => `
                <option
                    value="${escapeHTML(chapter)}"
                    ${chapter === state.activeChapter ? "selected" : ""}
                >
                    ${escapeHTML(chapter)}
                </option>
            `).join("");
    }

    /* -----------------------------------------------------
       Copy Answer
       ----------------------------------------------------- */
    function copyAnswer(questionId, button) {

        const question =
            getData().find(
                q =>
                    String(q.id) ===
                    String(questionId)
            );

        if (!question) return;

        let answer = "";

        if (typeof question.modelAnswer === "string") {

            answer = question.modelAnswer;

        } else if (
            question.modelAnswer &&
            typeof question.modelAnswer === "object"
        ) {

            answer =
                Object.entries(question.modelAnswer)
                    .filter(
                        ([key]) =>
                            key !== "examTips" &&
                            key !== "tips"
                    )
                    .map(
                        ([key, value]) =>
                            `${key}: ${value}`
                    )
                    .join("\n\n");
        }

        const text =

`Question:
${question.question}

Answer:
${answer}`;

        navigator.clipboard
            .writeText(text)
            .then(() => {

                const original =
                    button.innerHTML;

                button.innerHTML =
                    "✅ Copied!";

                setTimeout(() => {
                    button.innerHTML =
                        original;
                }, 1500);

            })
            .catch(() => {

                alert(
                    "Unable to copy. Please copy the answer manually."
                );

            });
    }

    /* -----------------------------------------------------
       Reset
       ----------------------------------------------------- */
    function reset() {

        state.activeYear = "All";
        state.activeSubject = "All";
        state.activeChapter = "All";
        state.activeMarks = "all";
        state.searchQuery = "";

        render(
            state.containerId,
            "All",
            ""
        );
    }

    /* -----------------------------------------------------
       Result Events
       ----------------------------------------------------- */
    function attachResultEvents() {

        document
            .querySelectorAll(".pyq-copy-btn")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        copyAnswer(
                            button.dataset.copyId,
                            button
                        );

                    }
                );

            });

        const resetButton =
            document.getElementById(
                "pyq-reset"
            );

        if (resetButton) {

            resetButton.addEventListener(
                "click",
                reset
            );
        }
    }

    /* -----------------------------------------------------
       Main Events
       ----------------------------------------------------- */
    function attachEvents() {

        const yearSelect =
            document.getElementById(
                "pyq-year-filter"
            );

        const subjectSelect =
            document.getElementById(
                "pyq-subject-filter"
            );

        const chapterSelect =
            document.getElementById(
                "pyq-chapter-filter"
            );

        const searchInput =
            document.getElementById(
                "pyq-search"
            );


        /* Year */
        if (yearSelect) {

            yearSelect.addEventListener(
                "change",
                event => {

                    state.activeYear =
                        event.target.value;

                    state.activeSubject =
                        "All";

                    state.activeChapter =
                        "All";

                    refresh();

                }
            );
        }


        /* Subject */
        if (subjectSelect) {

            subjectSelect.addEventListener(
                "change",
                event => {

                    state.activeSubject =
                        event.target.value;

                    state.activeChapter =
                        "All";

                    refresh();

                }
            );
        }


        /* Chapter */
        if (chapterSelect) {

            chapterSelect.addEventListener(
                "change",
                event => {

                    state.activeChapter =
                        event.target.value;

                    refresh();

                }
            );
        }


        /* Search */
        if (searchInput) {

            searchInput.addEventListener(
                "input",
                event => {

                    state.searchQuery =
                        event.target.value;

                    const results =
                        document.getElementById(
                            "pyq-results"
                        );

                    if (results) {

                        results.innerHTML =
                            renderQuestionList(
                                getData()
                            );
                    }

                    attachResultEvents();

                }
            );
        }


        /* Marks */
        document
            .querySelectorAll(".pyq-mark-btn")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        state.activeMarks =
                            button.dataset.marks;

                        document
                            .querySelectorAll(
                                ".pyq-mark-btn"
                            )
                            .forEach(btn =>
                                btn.classList.remove(
                                    "active"
                                )
                            );

                        button.classList.add(
                            "active"
                        );

                        const results =
                            document.getElementById(
                                "pyq-results"
                            );

                        if (results) {

                            results.innerHTML =
                                renderQuestionList(
                                    getData()
                                );
                        }

                        attachResultEvents();

                    }
                );

            });


        /* Folder: Professional Year */
        document
            .querySelectorAll(
                "[data-year-folder]"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const year =
                            button.dataset.yearFolder;

                        const content =
                            document.querySelector(
                                `[data-year-content="${CSS.escape(year)}"]`
                            );

                        if (!content) return;

                        const isOpen =
                            content.style.display !==
                            "none";

                        content.style.display =
                            isOpen
                                ? "none"
                                : "block";

                        const arrow =
                            button.querySelector(
                                ".pyq-folder-arrow"
                            );

                        if (arrow) {
                            arrow.textContent =
                                isOpen ? "›" : "⌄";
                        }

                    }
                );

            });


        /* Folder: Subject */
        document
            .querySelectorAll(
                "[data-subject-folder]"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const subject =
                            button.dataset.subjectFolder;

                        const contents =
                            document.querySelectorAll(
                                "[data-subject-content]"
                            );

                        let content = null;

                        contents.forEach(item => {

                            if (
                                item.dataset.subjectContent ===
                                subject
                            ) {
                                content = item;
                            }

                        });

                        if (!content) return;

                        const isOpen =
                            content.style.display !==
                            "none";

                        content.style.display =
                            isOpen
                                ? "none"
                                : "block";

                    }
                );

            });


        /* Folder: Chapter */
        document
            .querySelectorAll(
                "[data-chapter-folder]"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        state.activeYear =
                            button.dataset.parentYear;

                        state.activeSubject =
                            button.dataset.parentSubject;

                        state.activeChapter =
                            button.dataset.chapterFolder;

                        render(
                            state.containerId,
                            state.activeYear,
                            state.searchQuery
                        );

                    }
                );

            });


        attachResultEvents();
    }

    /* -----------------------------------------------------
       Public API
       ----------------------------------------------------- */
    return {

        render,

        refresh,

        reset,

        getState: () => ({
            ...state
        })

    };

})();