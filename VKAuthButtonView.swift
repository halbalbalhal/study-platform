//
//  VKAuthButtonView.swift
//  Hoff
//
//  Created by Kirill Maksimchik on 14.02.23.
//

import UIKit
import VKSDK

// MARK: - Delegate
protocol VKAuthButtonViewDelegate: AnyObject {
    func vkAuthButtonTapped()
    func exchange(silentToken: VKSDK.VKID.SilentToken, completion: @escaping (Result<VKSDK.VKID.AccessToken, Error>) -> Void)
}

// MARK: - VKAuthButtonView
final class VKAuthButtonView: UIView {

    // MARK: - PublicProperties
    weak var delegate: VKAuthButtonViewDelegate?

    // MARK: - SubviewsProperties
    private lazy var loginWithVKButton: UIView = {
        let oneTapButton = VKID.OneTapButton(
            controllerConfiguration: .authController(
                authController, presenter: .newUIWindow
            )
        )

        guard let button = try? VKService.shared.vk?.vkid.ui(for: oneTapButton).uiView() else {
            return UIView()
        }

        button.addTarget(self, action: #selector(vkAuthButtonTapped), for: .touchUpInside)
        return button
    }()

    // MARK: - PrivateProperties
    private lazy var authController = {
        VKID.AuthController(flow: .exchanging(tokenExchanger: .custom(weak: self)), delegate: self)
    }()

    // MARK: - Init
    init() {
        super.init(frame: .zero)
        setupSubviews()
        setupConstraints()
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setupSubviews()
        setupConstraints()
    }

    // MARK: - PrivateFunctions
    private func setupSubviews() {
        addSubview(loginWithVKButton)
    }

    private func setupConstraints() {
        loginWithVKButton.snp.makeConstraints { make in
            make.edges.equalToSuperview()
        }
    }

    // MARK: - Actions
    @objc private func vkAuthButtonTapped() {
//        UniversalLinks.shared.vkAuthView = self
        delegate?.vkAuthButtonTapped()
    }
}

// MARK: - VKIDFlowDelegate
extension VKAuthButtonView: VKIDFlowDelegate {
    func vkid(_ vkid: VKSDK.VKID.Module, didCompleteAuthWith result: Result<VKSDK.VKID.UserSession, Error>) {
        
    }
}

// MARK: - TokenExchanging
extension VKAuthButtonView: TokenExchanging {
    func exchange(
        silentToken: VKSDK.VKID.SilentToken,
        completion: @escaping (Result<VKSDK.VKID.AccessToken, Error>) -> Void
    ) {
        delegate?.exchange(silentToken: silentToken, completion: completion)
    }
}
