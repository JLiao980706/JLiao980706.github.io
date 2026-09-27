// ============================================================
//  papers.js  —  Add / edit papers here
// ============================================================
//
//  Field reference:
//    key        — short unique identifier (letters/numbers/underscores).
//                 Drop a file named "{key}.png" into images/papers/ and it
//                 will appear as the paper thumbnail automatically.
//                 If no image is found the venue badge is shown instead.
//    title      — paper title (plain text)
//    url        — link for the title click (usually arXiv or proceedings PDF)
//    badge      — text shown in the left badge box; use \n for line breaks
//    authors    — author string; wrap your name in <strong>…</strong>,
//                 append * for equal contribution
//    venueFull  — full venue + year shown in italics
//    links      — array of { label, url } for paper / code / poster / etc.
//    abstract   — one-paragraph summary (plain text)
//
//  Papers are displayed in the order listed here (newest first).
// ============================================================

const papers = [

  // ── 2026 preprints ──────────────────────────────────────────────────────────

  {
    key: "adapad",
    title: "AdaPaD: Adaptive Parallel Deflation for PEFT with Self-Correcting Rank Discovery",
    url: "https://arxiv.org/abs/2605.10741",
    badge: "Preprint\n2026",
    authors: "Barbara Su, <strong>Fangshuo Liao</strong>, Anastasios Kyrillidis",
    venueFull: "arXiv preprint arXiv:2605.10741, 2026",
    links: [
      { label: "paper", url: "https://arxiv.org/abs/2605.10741" },
    ],
    abstract: `A fine-tuning method for LLMs that trains all rank-1 LoRA components simultaneously,
      with self-correcting deflation errors that converge to zero over rounds. Features
      per-module dynamic rank discovery and achieves competitive performance on GLUE/SQuAD
      with adapters ~30.7% smaller than baseline.`,
  },

  {
    key: "sgd_eos",
    title: "SGD at the Edge of Stability: The Stochastic Sharpness Gap",
    url: "https://arxiv.org/abs/2604.21016",
    badge: "Preprint\n2026",
    authors: "<strong>Fangshuo Liao</strong>, Afroditi Kolomvaki, Anastasios Kyrillidis",
    venueFull: "arXiv preprint arXiv:2604.21016, 2026",
    links: [
      { label: "paper", url: "https://arxiv.org/abs/2604.21016" },
    ],
    abstract: `Extends the Edge of Stability phenomenon from full-batch GD to SGD.
      Introduces "stochastic self-stabilization" and derives a closed-form equation
      for the sharpness gap, showing smaller batch sizes correlate with flatter solutions.`,
  },

  {
    key: "lowrank_quadratic",
    title: "Exploiting Low-Rank Objective Structure in Discrete Quadratic Optimization",
    url: "https://arxiv.org/abs/2602.20376",
    badge: "Preprint\n2026",
    authors: "Ria Stevens, <strong>Fangshuo Liao</strong>, Barbara Su, Thanasis Hadjidimoulas, Jianqiang Li, Anastasios Kyrillidis",
    venueFull: "arXiv preprint arXiv:2602.20376, 2026",
    links: [
      { label: "paper", url: "https://arxiv.org/abs/2602.20376" },
    ],
    abstract: `When the objective matrix has rank r, global maximizers of complex-valued quadratic forms
      over roots of unity belong to a candidate set of size O(rn^{2r-1}), constructible
      efficiently via hyperplane arrangement enumeration. A randomized variant scales to problems
      exceeding one million variables.`,
  },

  {
    key: "gaussian_masking",
    title: "Convergence Analysis of Two-Layer Neural Networks under Gaussian Input Masking",
    url: "https://arxiv.org/abs/2602.17423",
    badge: "Preprint\n2026",
    authors: "Afroditi Kolomvaki, <strong>Fangshuo Liao</strong>, Evan Dramko, Ziyun Guang, Anastasios Kyrillidis",
    venueFull: "arXiv preprint arXiv:2602.17423, 2026",
    links: [
      { label: "paper", url: "https://arxiv.org/abs/2602.17423" },
    ],
    abstract: `Via NTK analysis, shows two-layer ReLU networks trained with Gaussian-masked inputs achieve
      linear convergence up to an error proportional to the mask's variance. Applies to dropout,
      noisy sensors, privacy-preserving training, and federated learning.`,
  },

  // ── 2025 ────────────────────────────────────────────────────────────────────

  {
    key: "guided_experts",
    title: "Guided by the Experts: Provable Feature Learning Dynamics of Soft-Routed Mixture-of-Experts",
    url: "https://arxiv.org/abs/2510.07205",
    badge: "Preprint\n2025",
    authors: "<strong>Fangshuo Liao</strong>, Anastasios Kyrillidis",
    venueFull: "arXiv preprint arXiv:2510.07205, 2025",
    links: [
      { label: "paper", url: "https://arxiv.org/abs/2510.07205" },
      { label: "code",  url: "https://github.com/JLiao980706/Guided_by_the_Experts" },
    ],
    abstract: `First theoretical analysis of the optimization landscape of soft-routed MoE architectures.
      Proves that with sufficient over-parameterization, the router's learning is guided by the
      experts in a student-teacher setup, and post-training pruning followed by fine-tuning
      reaches global optimality.`,
  },

  {
    key: "parallel_deflation",
    title: "Provable Model-Parallel Distributed Principal Component Analysis with Parallel Deflation",
    url: "https://arxiv.org/pdf/2502.17615",
    badge: "CPAL\n2025",
    authors: "<strong>Fangshuo Liao</strong>, Wenyi Su, Anastasios Kyrillidis",
    venueFull: "Conference on Parsimony and Learning (CPAL), 2025",
    links: [
      { label: "paper",  url: "https://arxiv.org/pdf/2502.17615" },
      { label: "code",   url: "https://github.com/JLiao980706/ParallelDeflation" },
      { label: "poster", url: "https://jasperliao.github.io/uploads/parallel_defl_poster.pdf" },
    ],
    abstract: `A distributed PCA framework where workers each target a distinct eigenvector
      and refine via hierarchical updates from peer workers, inspired by the deflation method.
      Provides theoretical convergence analysis with low communication cost.`,
  },

  // ── 2024 ────────────────────────────────────────────────────────────────────

  {
    key: "ddome",
    title: "Learning to Specialize: Joint Gating-Expert Training for Adaptive MoEs in Decentralized Settings",
    url: "https://arxiv.org/abs/2306.08586",
    badge: "NeurIPS\n2024",
    authors: "Yehya Farhat, Hamza ElMokhtar Shili, <strong>Fangshuo Liao</strong>, Chen Dun, Mirian Hipolito Garcia, Guoqing Zheng, Ahmed Hassan Awadallah, Robert Sim, Dimitrios Dimitriadis, Anastasios Kyrillidis",
    venueFull: "Conference on Neural Information Processing Systems (NeurIPS), 2024",
    links: [
      { label: "paper", url: "https://arxiv.org/abs/2306.08586" },
    ],
    abstract: `Investigates joint training of gating functions and experts (DDOME) to dynamically
      allocate domain-specific expertise across multiple data distributions in federated
      learning settings.`,
  },

  {
    key: "nesterov",
    title: "Provable Accelerated Convergence of Nesterov's Momentum for Deep ReLU Neural Networks",
    url: "https://proceedings.mlr.press/v237/liao24a/liao24a.pdf",
    badge: "ALT\n2024",
    authors: "<strong>Fangshuo Liao</strong>, Anastasios Kyrillidis",
    venueFull: "International Conference on Algorithmic Learning Theory (ALT), 2024",
    links: [
      { label: "paper",  url: "https://proceedings.mlr.press/v237/liao24a/liao24a.pdf" },
      { label: "poster", url: "https://jasperliao.github.io/uploads/nesterov_poster.pdf" },
    ],
    abstract: `Introduces "partial strong convexity" and proves Nesterov's momentum achieves acceleration
      for this class. First work to prove accelerated convergence for deep ReLU neural networks.`,
  },

  {
    key: "err_propagation",
    title: "On the Error-Propagation of Inexact Hotelling's Deflation for Principal Component Analysis",
    url: "https://arxiv.org/pdf/2310.04283",
    badge: "ICML\n2024",
    authors: "<strong>Fangshuo Liao</strong>, J. Lyle Kim, Cruz Barnum, Anastasios Kyrillidis",
    venueFull: "International Conference on Machine Learning (ICML), 2024",
    links: [
      { label: "paper",  url: "https://arxiv.org/pdf/2310.04283" },
      { label: "poster", url: "https://jasperliao.github.io/uploads/err_prop_poster.pdf" },
    ],
    abstract: `Mathematically characterizes error propagation of inexact Hotelling's deflation in PCA.
      Derives explicit error bounds for both abstract sub-routines and power iteration as the
      eigenvector-finding procedure.`,
  },

  {
    key: "lth_pretrain",
    title: "How Much Pre-training Is Enough to Discover a Good Subnetwork?",
    url: "https://arxiv.org/pdf/2108.00259",
    badge: "TMLR\n2024",
    authors: "Cameron R. Wolfe*, <strong>Fangshuo Liao*</strong>, Qihan Wang, J. Lyle Kim, Anastasios Kyrillidis",
    venueFull: "Transactions on Machine Learning Research (TMLR), 2024",
    links: [
      { label: "paper", url: "https://arxiv.org/pdf/2108.00259" },
      { label: "code",  url: "https://github.com/JLiao980706/lth_pretrain" },
    ],
    abstract: `Derives a theoretical bound (logarithmic in dataset size) on the number of gradient descent
      pre-training steps needed before pruning yields a good subnetwork.`,
  },

  // ── 2023 ────────────────────────────────────────────────────────────────────

  {
    key: "scissorhands",
    title: "Scissorhands: Exploiting the Persistence of Importance Hypothesis for LLM KV Cache Compression at Test Time",
    url: "https://proceedings.neurips.cc/paper_files/paper/2023/file/a452a7c6c463e4ae8fbdc614c6e983e6-Paper-Conference.pdf",
    badge: "NeurIPS\n2023",
    authors: "Zichang Liu, Aditya Desai, <strong>Fangshuo Liao</strong>, Weitao Wang, Victor Xie, Zhaozhuo Xu, Anastasios Kyrillidis, Anshumali Shrivastava",
    venueFull: "Conference on Neural Information Processing Systems (NeurIPS), 2023",
    links: [
      { label: "paper", url: "https://proceedings.neurips.cc/paper_files/paper/2023/file/a452a7c6c463e4ae8fbdc614c6e983e6-Paper-Conference.pdf" },
    ],
    abstract: `Reduces LLM KV cache memory by up to 5× without finetuning, based on the "persistence of
      importance" hypothesis that pivotal tokens remain influential across generation steps.
      Compatible with 4-bit quantization for further compression.`,
  },

  {
    key: "gist",
    title: "GIST: Distributed Training for Large-Scale Graph Convolutional Networks",
    url: "https://arxiv.org/pdf/2102.10424",
    badge: "J. Appl.\nComput.\nTopology\n2023",
    authors: "Cameron R. Wolfe*, Jingkang Yang*, <strong>Fangshuo Liao*</strong>, Arindam Chowdhury, Chen Dun, Artun Bayer, Santiago Segarra, Anastasios Kyrillidis",
    venueFull: "Journal of Applied and Computational Topology, 2023",
    links: [
      { label: "paper", url: "https://arxiv.org/pdf/2102.10424" },
      { label: "code",  url: "https://github.com/wolfecameron/GIST" },
    ],
    abstract: `A distributed GCN training framework partitioning model parameters into smaller sub-GCNs
      trained independently in parallel. Trains a 32,768-dimensional GraphSAGE model
      (8× GPU capacity) to state-of-the-art on the Amazon2M dataset.`,
  },

  {
    key: "slth_eps",
    title: "Strong Lottery Ticket Hypothesis with ε-perturbation",
    url: "https://proceedings.mlr.press/v206/xiong23a/xiong23a.pdf",
    badge: "AISTATS\n2023",
    authors: "Zheyang Xiong, <strong>Fangshuo Liao</strong>, Anastasios Kyrillidis",
    venueFull: "International Conference on Artificial Intelligence and Statistics (AISTATS), 2023",
    links: [
      { label: "paper",  url: "https://proceedings.mlr.press/v206/xiong23a/xiong23a.pdf" },
      { label: "code",   url: "https://github.com/JLiao980706/PerturbedSLTH" },
      { label: "poster", url: "https://jasperliao.github.io/uploads/slth_poster.pdf" },
    ],
    abstract: `Extends the strong Lottery Ticket Hypothesis to allow ε-scale perturbation on random
      initial weights, reducing the over-parameterization requirement by O(1/(1+ε)).`,
  },

  // ── 2022 ────────────────────────────────────────────────────────────────────

  {
    key: "shallow_nn_masking",
    title: "On the Convergence of Shallow Neural Network Training with Randomly Masked Neurons",
    url: "https://arxiv.org/pdf/2112.02668",
    badge: "TMLR\n2022",
    authors: "<strong>Fangshuo Liao</strong>, Anastasios Kyrillidis",
    venueFull: "Transactions on Machine Learning Research (TMLR), 2022",
    links: [
      { label: "paper", url: "https://arxiv.org/pdf/2112.02668" },
    ],
    abstract: `Studies convergence of iteratively training randomly selected subnetworks (Dropout,
      Independent Subnet Training) in overparameterized single hidden-layer ReLU networks.
      Proves linear convergence rate to a neighborhood of the optimum.`,
  },

  {
    key: "loft",
    title: "LoFT: Finding Lottery Tickets through Filter-wise Training",
    url: "https://arxiv.org/pdf/2210.16169",
    badge: "AISTATS\n2022",
    authors: "Qihan Wang*, Chen Dun*, <strong>Fangshuo Liao*</strong>, Chris Jermaine, Anastasios Kyrillidis",
    venueFull: "International Conference on Artificial Intelligence and Statistics (AISTATS), 2022",
    links: [
      { label: "paper",  url: "https://arxiv.org/pdf/2210.16169" },
      { label: "code",   url: "https://github.com/dunchen/LOFT_release" },
      { label: "poster", url: "https://jasperliao.github.io/uploads/LOFT_poster.pdf" },
    ],
    abstract: `A filter distance metric identifies winning ticket subnetworks early in training.
      LoFT partitions CNN layers by filters trained independently in parallel,
      saving memory and communication while preserving lottery ticket quality.`,
  },

];
